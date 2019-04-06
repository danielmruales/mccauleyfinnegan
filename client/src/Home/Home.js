import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='heroPic'></div>
            <div className='secondSection'> <h1>Herro</h1></div>
        </div>
    );
};

export default Home;