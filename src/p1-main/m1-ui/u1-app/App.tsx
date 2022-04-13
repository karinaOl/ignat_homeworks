import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import HW6 from "../../../p2-homeworks/h6/HW6";
import HW7 from "../../../p2-homeworks/h7/HW7";

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW5/>
            <HW6/>
            <HW7/>
        </div>
    )
}

export default App
