import { Link, NavLink } from 'react-router-dom';

import { AppRoute } from '../../consts/app-route';
import {
  authorizationStatus,
  AuthorizationStatus,
} from '../../consts/authorization-status';

export default function Header(): React.JSX.Element {
  const setActiveLink = ({ isActive }: { isActive: boolean }) => isActive ? 'link active' : 'link'
  const isAuthorization = authorizationStatus === AuthorizationStatus.Auth

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={AppRoute.Main}>
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink className={setActiveLink} to={AppRoute.Main}>Квесты</NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className={setActiveLink} to={AppRoute.Contacts}>Контакты</NavLink>
            </li>
            {
              isAuthorization &&
              <li className="main-nav__item">
                <NavLink className={setActiveLink} to={AppRoute.MyQuests}>Мои бронирования</NavLink>
              </li>
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            isAuthorization ?
              <Link className="btn btn--accent header__side-item" to="#">Выйти</Link> :
              <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
          }

          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header >
  );
}
