"use client";
import { useUserStore } from '@/app/store'
import Image from 'next/image'
import Logo from '@/app/img/logo.png'
import Loader from '@/app/img/loader.gif'
import styles from './home.module.scss'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Form from './form'
import Training from './training';
import { useEffect } from "react";

function Loading() {
    return (
        <div className={styles['preloader']} >
            <div className="preloader-img">
                <Image
                    src={Logo}
                    alt="logo"
                    width={357}
                    height={231}
                    priority
                />
            </div>
            <div className="preloader-gif">
                <Image
                    src={Loader}
                    alt="loader"
                    width={64}
                    height={64}
                    priority
                />
            </div>
        </div>
    )
}

function Screen() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Training />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </div>
    );
}

export default function Index() {
    const [test] = useUserStore(
        (state) => [
            state.test,
        ],
    );
    useEffect(() => {
        test()
    }, []);
    return (
        <div>
            {/*  <Loading /> */}
            <Router>
                <Screen />
            </Router>
        </div>
    )
}