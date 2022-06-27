import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import '../css/navbar.css';




const NavBar = () => {
    
    return (
        <nav className="navBar">
            <Link to="/" className="navBarHeader" >JTF jewellry</Link>

            <ul>
                <CustomLink to="/">News</CustomLink>
                <CustomLink to="/how">How we do it</CustomLink>
                <CustomLink to="/products">Products</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        )
}

// Export for å kunne importere andre steder aka index.js
export default NavBar;

