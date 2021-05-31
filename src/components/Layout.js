import React from 'react'
import Header from './Navigation';

function Layout({ children }) {
    return (
        <div>
            <Header/>
            { children }
        </div>
    )
}

export default Layout