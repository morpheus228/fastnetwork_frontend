import React, {useState} from "react";
import styles from './form.module.scss';
import {Input, Select} from "@/app/components/ui-components";
import {useForm} from 'react-hook-form';

const options = [
    {'value': 'female', 'title': 'Женский'},
    {'value': 'male', 'title': 'Мужской'},
    {'value': 'other', 'title': 'Другое'}
];

export default function BasicInfo() {

    const [gender, setGenderValue] = useState("");
    const handleGenderSelect = (value: string) => {
        setGenderValue(value);
    };
    const selectedGender = options.find((item) => item.value === gender);

    const [inputStyle, setInputStyle] = React.useState('');

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data: any) => {
        // console.log(JSON.stringify(data));
    }

    return (
        <div className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input type={'text'} text={'Как тебя зовут?'} placeholder={'Укажи реальное имя или ник'}
                    // minLength={3} maxLength={30}
                       {...register("name", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.name?.type === "required" && <p>Это поле является обязательным</p>}
                {errors?.name?.type === "maxLength" && (
                    <p>Длина поля не может превышать 30 символов</p>
                )}
            </div>
            <div>
                <Select
                    mode="cells"
                    options={options}
                    selected={selectedGender || null}
                    {...register("gender", {
                        required: true,
                    })}
                    onChange={handleGenderSelect}
                    placeholder="Выбери свой пол"
                />
                {errors?.gender?.type === "required" && <p>Это поле является обязательным</p>}
            </div>
            <div>
                <Input type={'date'} text={'Сколько тебе лет?'} placeholder={'Введи возраст'}
                    // minLength={0} maxLength={20}
                       {...register("bird", {
                           required: true,
                       })}
                       onChange={(event: any) => {
                           const value = event.target.value;
                           setInputStyle(value !== '' ? styles['has-value'] : '')
                       }}
                       className={`${styles['date']} ${inputStyle}`}
                />
                {errors?.bird?.type === "required" && <p>Это поле является обязательным</p>}
            </div>
        </div>
    )
}