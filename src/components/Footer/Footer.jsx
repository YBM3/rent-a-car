import Container from 'components/Container';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css['footer']}>
      <Container>
        <div className={css['footer-wrap']}>
          <p className={css['footer-descr']}>Developed by</p>
          <a
            className={css['footer-link']}
            href="https://www.linkedin.com/in/aliaksandr-porakh-34ba96235/"
            rel="noopener noreferer nofollow"
            target="blank"
            aria-label="Linkedin"
          >
            Aleksander Porakh
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
