import { Link } from 'react-router-dom';
import css from './Home.module.css';
import mainBtnStyle from 'components/MainBtn/MainBtn.module.css';

const Home = () => {
  return (
    <div className={css['hero']}>
      <h1 className={css['hero-title']}>
        RENT-<span className={css['hero-title-accent']}>A</span>-CAR
      </h1>
      <p className={css['hero-descr']}>
        Find the rental car that's right for you
      </p>

      <Link
        to="/catalog"
        className={`${mainBtnStyle['main-btn']} ${css['hero-btn']}`}
      >
        Go to catalog
      </Link>
    </div>
  );
};

export default Home;
