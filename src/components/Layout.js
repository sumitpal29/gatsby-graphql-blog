import React from 'react';
import Header from './Navigation';
import { content } from '../scss/content.module.scss';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={content}>{children}</div>
    </div>
  );
}

export default Layout;
