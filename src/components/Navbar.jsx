import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return <nav className="navbar navbar-dark bg-secondary navbar-expand-md">
        <div className="navbar-brand">
            Github Поиск
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">Информация</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar;