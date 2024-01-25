import styles from './training.module.scss';
import React, { useState } from "react";
import Button from './ui-components';

export default function Training() {

    const data = [
        {
            title: 'Привет! ',
            description: 'Наша команда поможет тебе найти единомышленников  для свершения великих дел и крутых проектов'
        },
        {
            title: 'Анкета о себе',
            description: 'Заполни анкету о себе, чтобы не только другие люди, но и ты сам понимал, чем ты интересуешься и что умеешь!'
        },
        {
            title: 'Анкета запроса',
            description: 'Здесь ты сможешь сформировать запрос на поиск собеседника, чтобы улучшить качество дальнейшего общения '
        },
        {
            title: 'Поиск собеседника',
            description: 'Искуственный интеллект быстро выберет для тебя сливки из самых сливок ' +
                '-  только принимай или отклоняй анкеты :)'
        },
        {
            title: 'Выбор собеседника',
            description: 'Активность собеседников и результаты подбора ты можешь посмотреть на специальной вкладке “Запросы”'
        },
        {
            title: 'Это все? Еще нет!',
            description: 'Если ты хочешь оценить работу приложения, что-то спросить или предложить - Пиши Боту в Телеграмме!'
        },
        {
            title: 'Давай начнем вместе',
            description: 'Заполняй анкету о себе - не переживай мы поможем тебе сделать это быстро и легко и погнали!'
        },
    ];

    const handleClickNext = () => {
        setNumberScreen(numberScreen + 1);
    }

    const handleClickFinish = () => {
        setNumberScreen(6);
    }

    const handleClickScroll = (index: number) => {
        setNumberScreen(index);
    }

    const [numberScreen, setNumberScreen] = useState(0);
    const numbers = [0, 1, 2, 3, 4, 5, 6];


    return (
        <div className={styles['container-education']}>
            <div className={styles['education-text']}>
                <div>
                    <h3>{data[numberScreen].title}</h3>
                    <p>{data[numberScreen].description}</p>
                </div>

                <div className={styles['education-scroll']}>
                    {numbers.map(el => {
                        return el === numberScreen ?
                            <div onClick={() => handleClickScroll(el)} className={styles['highlighted']}></div> :
                            <div onClick={() => handleClickScroll(el)} className={styles['circle']}></div>
                    })}
                </div>
            </div>

            <div className={styles['education-btns']}>
                {numberScreen === 6 ?
                    <Button text="Заполнить свою анкету" type="primary" width="100%" />
                    :
                    <div className={styles.block}>
                        <Button text="Пропустить" onClick={handleClickFinish} type="disbl" width="50%" />
                        <Button text="Дальше!" onClick={handleClickNext} type="primary" width="50%" />
                    </div>
                }
            </div>
        </div>
    );
}
