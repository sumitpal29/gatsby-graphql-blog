import React from 'react';
import { Link } from 'gatsby';
import { nav__conatiner, headerFixed } from './navigation.module.scss';

function Header() {
  return (
    <header className={headerFixed}>
      <nav className={nav__conatiner}>
        <div className="container">
          <Link to="/">
            <span
              style={{
                backgroundColor: '#fff',
                color: '#FBD215',
                fontSize: 35,
                fontWeight: 900,
              }}
            >
              SP.
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
