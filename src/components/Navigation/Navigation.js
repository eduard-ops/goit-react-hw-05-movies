import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="header">
      <nav className="header-navigation">
        <ul className="site-nav">
          <li className="site-link__item">
            <NavLink className="header-navigation__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="site-link__item">
            <NavLink className="header-navigation__link" to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
