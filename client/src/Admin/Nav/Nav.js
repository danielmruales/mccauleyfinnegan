import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div className='adminNav'>
            <Link to='/' className='adminItems'>Home</Link>
            <Link to='/admin' className='adminItems'>Admin</Link>
            <Link to='/submissons'className='adminItems'>Contact Submissions</Link>
            <Link to='/pictures' className='adminItems'>Pictures</Link>
        </div>
    );
};

export default Nav;