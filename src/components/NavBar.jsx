import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import ReactSwitch from 'react-switch';

import '../css/App.css';




const NavBar = (props) => {
    let theme = props.theme;
    let toggleTheme = props.toggleTheme;
    return (
        <div>
            
        <nav className="navBar">
            
            <ul className="navBarButtons">
                <CustomLink to="/">News</CustomLink>
                <CustomLink to="/how">How we do it</CustomLink>
                <CustomLink to="/products">Products</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <div className="themeSwitch">
                <ReactSwitch className="switchNav" handleDiameter={28} offHandleColor="#dddddd" color="#777777" offColor="#dddddd" onColor="#555555" onHandleColor="#555555" onChange={toggleTheme} checked={ theme === "dark"} />
            </div>
            </ul>
            
        </nav>
        
        
        </div>
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

