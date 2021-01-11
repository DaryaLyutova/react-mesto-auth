import React from 'react';
import { useHistory } from 'react-router-dom';
import * as mestoAuth from '../mestoAuth.js';

function Login(handeleLogin) {
    
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
      if (!email || !password){
        return;
      }
      mestoAuth.avthorize(email, password).then((data) => {
        if(data.jwt){
          resetForm();
          handeleLogin();
          history.push('/');
        } else {
          setMassege( 'Что-то пошло не так!')
        }
      });
  };

    return(
        <div className="sign">
            <h1 className="sign__title">Вход</h1>
            <form className="sign__form" onSubmit={handelSubmit}>
                <input className="sign__input" placeholder="Email" type="email"name="email"
                onChange={handelEmailChange}
                value={email}
                required />
                <input className="sign__input" placeholder="Пароль" type="password"
                name="password"
                onChange={handelPassword}
                value={password}
                required />
                <button type="submit" className="sign__button">Войти</button>
            </form>            
        </div>
    )    
}
export default Login;