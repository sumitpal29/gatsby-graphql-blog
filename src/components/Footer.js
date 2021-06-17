import React from 'react';
import { footerContainer, footerTop } from '../scss/footer.module.scss';

function Footer() {
  return (
    <>
      <div className={footerTop}>
        <img src="https://i.imgur.com/2FkwOg6.png" alt="sumitpal.in" />
      </div>
      <footer className={footerContainer}>
        <span>© 2021 Sumit Pal</span>
      </footer>
    </>
  );
}

export default Footer;
