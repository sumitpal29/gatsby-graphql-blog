import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';
import _map from 'lodash/map';
import cx from 'classNames';
import { Avatar } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';

import {
  navContainer,
  navLinks,
  navTitle,
  navMenuOutline,
  mobileNavbar,
  mobileNavbarVisible,
  transparentBgVisible,
  header,
} from '../scss/navigation.module.scss';

const navLinksArr = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

function Header() {
  const [isMobileNavbarVisible, setMobileNavbarVisibility] = useState(false);

  const handleToggleNavbar = useCallback(() => {
    setMobileNavbarVisibility((prev) => !prev);
  }, []);

  const getLinks = useCallback((classname) => {
    return (
      <ul className={classname}>
        {_map(navLinksArr, (link, index) => (
          <li key={`nav-link-${index}`}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    );
  }, []);

  return (
    <div className={header}>
      <nav className={cx(navContainer)}>
        <div className={navTitle}>
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
            className="m-r-12"
          />
          <span>Sumit Pal</span>
        </div>
        <div>
          {getLinks(navLinks)}
          <MenuOutlined
            onClick={handleToggleNavbar}
            className={cx(navMenuOutline, 'm-r-18')}
          />
        </div>
      </nav>
      <div
        className={cx(mobileNavbar, {
          [mobileNavbarVisible]: isMobileNavbarVisible,
        })}
      >
        <span
          onClick={handleToggleNavbar}
          className={cx({
            [transparentBgVisible]: isMobileNavbarVisible,
          })}
        />
        {getLinks()}
      </div>
    </div>
  );
}

export default Header;
