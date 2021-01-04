import React from 'react';

function Login() {
    return(
        <div className="sign">
            <h1 className="sign__title">Вход</h1>
            <form className="sign__form">
                <input className="sign__input" placeholder="Email" type="email"></input>
                <input className="sign__input" placeholder="Пароль" type="password"></input>
                <button type="submit" className="sign__button">Войти</button>
            </form>            
        </div>
    )    
}
export default Login;