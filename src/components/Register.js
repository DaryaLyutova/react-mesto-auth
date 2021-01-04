import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

    return(
        <div className="sign">
            <h1 className="sign__title">Регистрация</h1>
            <form className="sign__form">
                <input placeholder="Email" className="sign__input" type="email"></input>
                <input placeholder="Пароль" className="sign__input" type="password"></input>
                <button type="submit" className="button" className="sign__button">Зарегистрироваться</button>
                <div className="sign__link-block">
                    <p className="sign__subtitle">Уже зарегистрированы?</p>
                    <Link to="sign-in" className="sign__link">Войти</Link>
                </div>
            </form>            
        </div>
    )    
}
export default Register;