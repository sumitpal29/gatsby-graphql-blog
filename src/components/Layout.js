import React from 'react';
import Header from './Navigation';
import Footer from './Footer';
import { content } from '../scss/content.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={content}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
