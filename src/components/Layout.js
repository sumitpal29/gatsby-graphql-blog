import React from 'react';
import Header from './Navigation';
import Footer from './Footer';
import Subscribe from './Subscribe';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Layout;
