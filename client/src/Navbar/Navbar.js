import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='mainNav'>
            <Link to='/'className='navItems'>Home</Link>
            <Link to='/photography' className='navItems'>Photography</Link>
            <Link to='/marketing' className='navItems'>Marketing</Link>
            <Link to='contact' className='navItems'>Contact</Link>
            <Link to='about' className='navItems'> About</Link>
        </div>
    );
};

export default Navbar;