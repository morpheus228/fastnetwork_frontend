import st from './Training.module.css';
import logo from '../../images/logo.jpg';
import React from "react";

const Training = () => {

    let data = [
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

    const [numberScreen, setNumberScreen] = React.useState(0);
    const numbers = [0, 1, 2, 3, 4, 5, 6];


    return (
        <div className={st.container}>
            <header className={st.gradiant}>
                <div className={st.rectangleUpper}>
                    <div className={st.shape1}></div>
                    <div className={st.shape2}></div>
                </div>

                <div className={st.rectangleLower}>
                    <img alt={'fastNetwork'} src={logo}/>
                    <div className={st.shape4}></div>
                    <div className={st.shape5}></div>
                </div>

                <div className={st.rectangle}></div>
            </header>

            <div className={st.containerForText}>
                <div className={st.text}>
                    <h3>{data[numberScreen].title}</h3>
                    <p>{data[numberScreen].description}</p>
                </div>

                <div className={st.scroll}>
                    {numbers.map(el => {
                        return el === numberScreen ?
                            <div className={st.highlighted}></div> :
                            <div className={st.circle}></div>
                    })}
                </div>
            </div>

            <div className={st.blockButton}>
                {numberScreen === 6 ? <button className={st.goAnketa}>Заполнить свою анкету</button>
                    :
                    <div className={st.block}>
                        <button className={`${st.skip} ${st.button}`}>Пропустить</button>
                        <button onClick={handleClickNext} className={`${st.next} ${st.button}`}>Дальше!</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Training;