import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as mestoAuth from '../mestoAuth.js';

function Register(handeleLogin) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMassege] = React.useState('');

    function handelEmailChange(e) {
        setEmail(e.target.value)
    };

    function handelPassword(e) {
      setPassword(e.target.value)
    };

    function resetForm() {
      setEmail('');
      setPassword('');
      setMassege('');
    }

    const history = useHistory();
    
    function handelSubmit(e) {
      e.preventDefault();
      mestoAuth.register(email, password).then((data) => {
        if(data){
          resetForm();
          history.push('/sign-in');
        } else {
          setMassege({
            message: 'Что-то пошло не так!'
          })
        }
      });
  };

    return(
        <div className="sign">
            <h1 className="sign__title">Регистрация</h1>
            <form className="sign__form" onSubmit={handelSubmit}>
                <input placeholder="Email" className="sign__input" type="email"
                name="email"
                onChange={handelEmailChange}
                value={email}
                required />
                <input placeholder="Пароль" className="sign__input" type="password"
                name="password"
                onChange={handelPassword}
                value={password}
                required />
                <button type="submit" 
                className="sign__button">Зарегистрироваться</button>
                <div className="sign__link-block">
                    <p className="sign__subtitle">Уже зарегистрированы?</p>
                    <Link to="sign-in" className="sign__link">Войти</Link>
                </div>
            </form>            
        </div>
    )    
}
export default Register;