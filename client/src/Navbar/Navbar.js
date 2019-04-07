import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='mainNav'>
            <Link to='/'className='navItems'>Home</Link>
            <Link to='/services' className='navItems'>Services</Link>
            <div>
            <Link to='/admin' className='navItems'>
                <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/logo.png' alt='logo' className='logo'/>
            </Link>
            </div>
            <Link to='/about' className='navItems'>About</Link>
            <Link to='/contact' className='navItems'> Contact </Link>
        </div>
    );
};

export default Navbar;