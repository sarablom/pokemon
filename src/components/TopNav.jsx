import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/TopNav.module.css';

export default function TopNav() {
    return (
        <nav className={style.topNav}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/favourite">Favourites</Link>
        </nav>
    )
}