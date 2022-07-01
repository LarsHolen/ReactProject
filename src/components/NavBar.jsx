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
                <ReactSwitch className="switchNav"
                            uncheckedIcon={false}
                            checkedIcon={false}
                            handleDiameter={20} 
                            height={15}
                            width={48} 
                            offHandleColor="#eee" 
                            color="#777" 
                            offColor="#aaa"
                            onColor="#aaa" 
                            onHandleColor="#555" 
                            onChange={toggleTheme} 
                            checked={ theme === "dark"} />
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
        <li className={isActive ? "active" : ""} >
            <Link to={to} {...props} id="CLink">{children}</Link>
        </li>
        )
}

// Export for å kunne importere andre steder aka index.js
export default NavBar;

