import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import s from './Header.module.css'

type activeNavLinkType = {
    isActive: boolean;
};

function Header() {

    const activeNav = {
        color: 'rgba(117, 149, 231, 0.76)',
    }

    return (
        <div className={s.headerContainer}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.navLinkItem} style={({isActive}: activeNavLinkType) =>
                isActive ? activeNav : {}
            }>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.navLinkItem} style={({isActive}: activeNavLinkType) =>
                isActive ? activeNav : {}
            }>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.navLinkItem} style={({isActive}: activeNavLinkType) =>
                isActive ? activeNav : {}
            }>junior+</NavLink>
            <span className={s.menuBtn}></span>
        </div>
    )
}

export default Header
