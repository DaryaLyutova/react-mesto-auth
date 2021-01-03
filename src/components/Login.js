import React from 'react';

function Login() {
    return(
        <div>
            <h1 className="sing__title">Вход</h1>
            <input className="sing__input" type="email"></input>
            <input className="sing__input" type="password"></input>
            <button className="button">Войти</button>
        </div>
    )
    
}
export default Login;