import React from 'react'
import { Link } from 'gatsby'
import _map from 'lodash/map';
import {navContainer, navLinks, navTitle} from '../scss/navigation.module.scss';

const navLinksArr = [{
    title: 'Home',
    path: '/'
}, {
    title: 'About',
    path: '/about'
}, {
    title: 'Contact',
    path: '/contact'
}]

function Header() {
    return (
        <nav className={navContainer}>
            <span className={navTitle}>Sumit Pal</span>
            <ul className={navLinks}>
                {_map(navLinksArr, (link, index) => <li key={`nav-link-${index}`}><Link to={link.path}>{link.title}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Header
