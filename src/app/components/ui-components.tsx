import styles from './ui-components.module.scss';
// import React, {useEffect, useRef, useState} from "react";
// import type {MouseEventHandler} from "react";

import React, { useEffect, useRef, useState } from "react";
import { MouseEventHandler } from "react";

export function Button(props: {
    text: string,
    type?: string,
    width: string,
    onClick?: () => void;
}) {
    return (
        <button onClick={props.onClick}
                style={{width: props.width}}
                className={`${styles['button']}  ${(props.type == 'primary' || props.type == 'submit') ? styles['btn-primary'] : ''}
        ${(props.type == 'disbl') ? styles['btn-disbl'] : ''}`}>{props.text}</button>
    );
}



export function Input(props: {
    text: string,
    type: string,
    placeholder: string,
    // minLength: number,
    // maxLength: number,
    className?: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {

    return (
        <form className={styles['container-input']}>
            <label htmlFor={'1'}>{props.text}</label>
            <input id={'1'} name={'input'} type={props.type} placeholder={props.placeholder}
                   // minLength={props.minLength} maxLength={props.maxLength}
                   className={props.className}
                   onChange={props.onChange}
            />
        </form>
    )
}

type Option = {
    value: string;
    title: string;
};
type OptionProps = {
    option: Option;
    onClick: (value: Option["value"]) => void;
};
const OptionEl = (props: OptionProps) => {
    const {
        option: {value, title},
        onClick
    } = props;
    const optionRef = useRef<HTMLLIElement>(null);

    const handleClick = (
        clickedValue: Option["value"]
    ): MouseEventHandler<HTMLLIElement> => () => {
        onClick(clickedValue);
    };

    useEffect(() => {
        const option = optionRef.current;
        if (!option) return;
        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (document.activeElement === option && event.key === "Enter") {
                onClick(value);
            }
        };

        option.addEventListener("keydown", handleEnterKeyDown);
        return () => {
            option.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, [value, onClick]);

    return (
        <li
            className={styles['option']}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
            data-testid={`select-option-${value}`}
            ref={optionRef}
        >
            {title}
        </li>
    );
};

type SelectProps = {
    selected: Option | null;
    options: Option[];
    placeholder?: string;
    mode?: "rows" | "cells";
    status?: "default" | "invalid";
    onChange?: (selected: Option["value"]) => void;
    onClose?: () => void;
};

export const Select = (props: SelectProps) => {
    const {
        options,
        placeholder,
        selected,
        onChange,
        onClose
    } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const {target} = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [onClose]);

    useEffect(() => {
        const placeholderEl = placeholderRef.current;
        if (!placeholderEl) return;

        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setIsOpen((prev) => !prev);
            }
        };
        placeholderEl.addEventListener("keydown", handleEnterKeyDown);

        return () => {
            placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
        };
    }, []);

    const handleOptionClick = (value: Option["value"]) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={styles['selectWrapper']}
            ref={rootRef}
            data-is-active={isOpen}
            data-testid="selectWrapper"
        >
            <div className={styles['container-label']}><label htmlFor={'select'}>Пол</label></div>

            <div className={styles['arrow']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M15 1.5L8 8.5L1 1.5" stroke="#43425C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div id={'select'}
                className={styles['placeholder']}
                onClick={handlePlaceHolderClick}
                role="button"
                tabIndex={0}
                ref={placeholderRef}
            >
                {selected?.title || placeholder}
            </div>
            {isOpen && (
                <ul className={styles['select']} data-testid="selectDropdown">
                    {options.map((option) => (
                        <OptionEl
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};