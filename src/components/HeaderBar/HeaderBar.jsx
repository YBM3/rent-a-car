import PageNav from 'components/PageNav';
import Container from 'components/Container';

import css from './HeaderBar.module.css';

const HeaderBar = () => {
  return (
    <header className={css['header']}>
      <Container>
        <PageNav />
      </Container>
    </header>
  );
};

export default HeaderBar;
