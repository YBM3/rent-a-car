import Container from 'components/Container';
import Footer from 'components/Footer';
import HeaderBar from 'components/HeaderBar';
import IconSprite from 'components/IconSprite';
import Loader from 'components/Loader';
import Section from 'components/Section';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Toaster />
      <IconSprite />
      <HeaderBar />
      <Suspense
        fallback={
          <Loader
            size={15}
            margin={10}
            position={{
              marginTop: '100px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          />
        }
      >
        <main>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
