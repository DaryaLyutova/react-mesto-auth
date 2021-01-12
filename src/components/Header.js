import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logo/logo.svg';

function Header(props) {
    return (
        <header className="header">
            <img src={headerLogo} alt="логотип" className="logo" />
            <p className="header__email">{props.email}</p>
            <Link to={props.link} className="header__link">{props.title}</Link>
        </header>
    )
}
export default Header;