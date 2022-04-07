import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      <div className="layout-container">{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Book Best Hotels for your Holiday',
};

export default Layout;
