import React, {useEffect, useState} from "react";
import styles from './form.module.scss';
import stylesTrain from './training.module.scss';
import {NavLink} from "react-router-dom";
import {Button, Input, Select} from "@/app/components/ui-components";
import {useForm} from 'react-hook-form';
import BasicInfo from "@/app/components/basicInfo";
import {debug} from "util";
import Sphere from "@/app/components/sphere";

const options = [
    {'value': 'female', 'title': 'Женский'},
    {'value': 'male', 'title': 'Мужской'},
    {'value': 'other', 'title': 'Другое'}
];


export default function Form() {

    const [textInfa, setTextInfa] = useState([
        {
            header: 'Основная информация',
            p: '',
            placeholder: ''
        },
        {
            header: 'Что тебе интересно?',
            p: 'Чему ты уделяешь больше всего времени?',
            placeholder: 'Работе над своим пэт-проектом, общению с семьей и занятиям спортом'
        },
        {
            header: 'Что тебе интересно?',
            p: 'Что ты чаще всего обсуждаешь?',
            placeholder: 'Обстановку в мире, обзоры Бэдкомедиана и новинки в мире автомобилей'
        },
        {
            header: 'В чем ты хорош/а?',
            p: 'В какой сфере ты развиваешься/работаешь?'
        },
        {
            header: 'В чем ты хорош/а?',
            p: 'Чему ты можешь научить?',
            placeholder: 'Python, готовить паэлью, вязать крючком,создавать предсказательные модели, варить кофе по-восточному'
        },
        {
            header: 'Еще пару слов о себе',
            p: '',
            placeholder: 'Я увлекаюсь IT-технологиями и всем, что связано с компьютерами. Я также большой киноман, люблю смотреть новинки и классику. \n' +
                'В свободное время играю в видеоигры и читаю книги научной фантастики. \n' +
                'Я забочусь о своем здоровье и люблю заниматься спортом. И, конечно же, обожаю путешествовать и открывать для себя новые места.\n'
        }
    ]);

    const [numberScreen, setNumberScreen] = React.useState(0);

    const handleClickNextOrBack = (n: number) => {
        setNumberScreen(numberScreen + n);
    }

    const [gender, setGenderValue] = useState("");
    const handlegenderSelect = (value: string) => {
        setGenderValue(value);
    };
    const selectedGender = options.find((item) => item.value === gender);

    const [inputStyle, setInputStyle] = React.useState('');


    // Функция для обновления текста
    const handleChange = (event: any) => {
        setTextInfa([...textInfa, textInfa[numberScreen].placeholder = event.target.value]);
    };

    const {
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data: any) => {
        // alert(JSON.stringify(data));
    }

    const handleFocus = (event: any) => {
        if (event.target.value === textInfa[numberScreen].placeholder) {
            event.target.value = '';
        }
    };

    useEffect(() => {
        const textarea = document.getElementById('textarea');
        if (textarea) {
            const halfHeight = textarea.clientHeight / 2;
            textarea.style.paddingTop = halfHeight + "px";
        }
    }, [numberScreen]);

    return (
        <form className={styles['container-anketa']} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['statusbar']}></div>

            <div className={styles['block-text']}>
                <h3>{textInfa[numberScreen].header}</h3>
            </div>

            {numberScreen === 0 ?
                <BasicInfo/> :
                <div className={styles['interests']}>
                    <label htmlFor={'textarea'}>{textInfa[numberScreen].p}</label>
                    {numberScreen === 3 ?
                       <Sphere/>
                        :
                        <div>
                            <textarea id={'textarea'} name={'area'} value={textInfa[numberScreen].placeholder}
                                      onChange={handleChange}
                                      onFocus={handleFocus}>
                        </textarea>

                            {errors?.anketa2?.type === "required" && <p>Это поле является обязательным</p>}
                            {errors?.anketa2?.type === "maxLength" && (
                                <p>Длина поля не может превышать 66 символов</p>
                            )}
                        </div>
                    }
                </div>
            }

            <div className={stylesTrain['education-btns']}>
                <div className={stylesTrain['block']}>
                    <Button text="Назад" onClick={() => handleClickNextOrBack(-1)} type="disbl" width="50%"/>
                    <Button text="Дальше!" onClick={() => handleClickNextOrBack(1)} type="submit" width="50%"/>
                </div>
            </div>
        </form>
    )
}