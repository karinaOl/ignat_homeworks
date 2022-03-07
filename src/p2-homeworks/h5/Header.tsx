import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.navbar}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? `${s.item} ${s.active}` : s.item}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive})=>isActive ? `${s.item} ${s.active}` : s.item}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=>isActive ? `${s.item} ${s.active}` : s.item}>junior+</NavLink>
            <div className={s.menuIcon}/>
        </div>
    )
}

export default Header
