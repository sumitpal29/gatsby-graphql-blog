import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';
import _map from 'lodash/map';
import cx from 'classNames';
import { Avatar, Drawer } from 'antd';
import { UserOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';

import {
  navContainer,
  navTitle,
  navMenuOutline,
  navbarRightMenus,
  header,
  rightHandNavDrawer,
  drawerStyles,
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
        <div className={navbarRightMenus}>
          <SearchOutlined
            style={{ fontSize: '24px' }}
            className={cx(navMenuOutline, 'm-r-12')}
          />
          <MenuOutlined
            style={{ fontSize: '24px' }}
            onClick={handleToggleNavbar}
            className={cx(navMenuOutline, 'm-r-18')}
          />
        </div>
      </nav>
      <Drawer
        title="Quick Links 🏃🏾‍♂️ "
        placement="left"
        width="350"
        closable={false}
        onClose={handleToggleNavbar}
        visible={isMobileNavbarVisible}
        className={drawerStyles}
        headerStyle={{ background: '#ddd', borderBottom: '1px solid #ccc' }}
      >
        {getLinks(rightHandNavDrawer)}
      </Drawer>
    </div>
  );
}

export default Header;
