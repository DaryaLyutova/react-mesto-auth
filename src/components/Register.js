import React from 'react';

function Register() {
    return(
        <div>
            <h1 className="sing__title">Регистрация</h1>
            <input className="sing__input" type="email"></input>
            <input className="sing__input" type="password"></input>
            <button className="button">Зарегистрироваться</button>
            <p className="sing__subtitle">Уже зарегистрированы?</p>
            <a href="#">Войти</a>
        </div>
    )    
}
export default Register;