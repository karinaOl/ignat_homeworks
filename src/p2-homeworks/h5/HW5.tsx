import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import AppRoutes from "./Routes";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <AppRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5
