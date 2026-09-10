import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className='max-w-7xl m-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
