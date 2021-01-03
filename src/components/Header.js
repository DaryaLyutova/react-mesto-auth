import React from 'react';
import headerLogo from '../images/logo/logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="логотип" className="logo" />
            <a href="#" className="header__link">Войти</a>
        </header>
    )
}
export default Header;