import React, {useState} from "react";
import styles from './form.module.scss';
import stylesTrain from './training.module.scss';
import {NavLink} from "react-router-dom";
import {Button, Input, Select} from "@/app/components/ui-components";
import {useForm} from 'react-hook-form';

const options = [
    {'value': 'female', 'title': 'Женский'},
    {'value': 'male', 'title': 'Мужской'},
    {'value': 'other', 'title': 'Другое'}
];


export default function Form() {

    const headers = [
        'Основная информация',
    ]

    const [numberScreen, setNumberScreen] = React.useState(0);

    // const handleClickFinish = () => {
    //     setNumberScreen(3);
    // }

    const handleClickNextOrBack = (n: number) => {
        setNumberScreen(numberScreen + n);
    }

    const [gender, setGenderValue] = useState("");
    const handlegenderSelect = (value: string) => {
        setGenderValue(value);
    };
    const selectedGender = options.find((item) => item.value === gender);

    const [inputStyle, setInputStyle] = React.useState('');

    // const {
    //     register,
    //     formState:{
    //         errors
    //     },
    //     handleSubmit
    // } = useForm();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    }

    return (
        <form className={styles['container-anketa']} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['statusbar']}></div>

            <div className={styles['block-text']}>
                <h3>{headers[numberScreen]}</h3>
            </div>

            {numberScreen === 0 ?
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
                            onChange={handlegenderSelect}
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