import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logo/logo.svg';

function Header(props) {
    //ссылка в header
  const [headerLink, setHeaderLink] = React.useState({
    title: 'Войти',
    link:'sign-in'
  })

    function handelHeaderTitle() {
        if ('/sign-in') {
          setHeaderLink({
            title: 'Загеристрироваться',
            link:'sign-up'
          });
        }
        if ('/sign-up') {
          setHeaderLink({
            title: 'Войти',
            link:'sign-in'
          });
        } else {
          setHeaderLink({
            title: 'Выйти',
            link:'sign-in'
          });
        }
      }

      React.useEffect(() => {
        handelHeaderTitle()
      },)

    return (
        <header className="header">
            <img src={headerLogo} alt="логотип" className="logo" />
            <p className="header__email">{props.email}</p>
            <Link to={headerLink.link} className="header__link">{headerLink.title}</Link>
        </header>
    )
}
export default Header;