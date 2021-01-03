import React from 'react';

function Register() {
    return(
        <div className="sing">
            <h1 className="sing__title">Регистрация</h1>
            <form className="sing__form">
                <input placeholder="Email" className="sing__input" type="email"></input>
                <input placeholder="Пароль" className="sing__input" type="password"></input>
                <button className="button" className="sing__button">Зарегистрироваться</button>
                <div className="sing__link-block">
                    <p className="sing__subtitle">Уже зарегистрированы?</p>
                    <a href="#" className="sing__link">Войти</a>
                </div>
            </form>            
        </div>
    )    
}
export default Register;