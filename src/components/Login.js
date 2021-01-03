import React from 'react';

function Login() {
    return(
        <div className="sing">
            <h1 className="sing__title">Вход</h1>
            <form className="sing__form">
                <input className="sing__input" type="email"></input>
                <input className="sing__input" type="password"></input>
                <button className="sing__button">Войти</button>
            </form>            
        </div>
    )
    
}
export default Login;