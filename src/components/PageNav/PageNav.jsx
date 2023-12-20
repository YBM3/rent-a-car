import Icon from 'components/Icon';
import { NavLink } from 'react-router-dom';
import css from './PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={css['nav']}>
      <NavLink to="/">
        <Icon className={css['logo']} id={'logo'} />
      </NavLink>

      <ul className={css['nav-list']}>
        <li>
          <NavLink className={css['nav-link']} to="/catalog">
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink className={css['nav-link']} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
