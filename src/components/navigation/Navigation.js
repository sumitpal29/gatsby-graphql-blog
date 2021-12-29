import React, { useEffect, useState, useCallback } from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import {
  nav__conatiner,
  headerFixed,
  scolledNavbar,
  navLinks,
  link,
} from './navigation.module.scss';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 60) {
      setIsSticky(true);
      return;
    }
    setIsSticky(false);
  }, [isSticky]);

  return (
    <header className={cx(headerFixed, { [scolledNavbar]: isSticky })}>
      <nav className={nav__conatiner}>
        <div className={cx('container', 'flex', 'flex-space-between')}>
          <Link to="/">
            <span
              style={{
                backgroundColor: '#fff',
                color: '#FBD215',
                fontSize: 45,
                fontWeight: 900,
              }}
            >
              SP.
            </span>
          </Link>
          <ul className={cx(navLinks, 'flex')}>
            <li>
              <Link to="/">
                <span className={link}>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className={link}>About</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={link}>Blog</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
