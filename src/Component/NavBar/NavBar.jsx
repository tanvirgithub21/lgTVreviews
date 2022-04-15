import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navBarBox'>
            <NavLink to="/home" className={({isActive }) => isActive? "active":"deactive"}>Home</NavLink>
            <NavLink to="/reviews" className={({isActive }) => isActive? "active":"deactive"}>Reviews</NavLink>
            <NavLink to="/dashboard" className={({isActive }) => isActive? "active":"deactive"}>Dashboard</NavLink>
            <NavLink to="/blog" className={({isActive }) => isActive? "active":"deactive"}>Blog</NavLink>
            <NavLink to="/about" className={({isActive }) => isActive? "active":"deactive"}>About</NavLink>
            <NavLink to="/login" className={({isActive }) => isActive? "active":"deactive"}>Login</NavLink>
        </div>
    );
};

export default NavBar;