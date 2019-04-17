import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar/>
           <div className='mainAbout'>
               <img src='https://images.unsplash.com/photo-1553531384-397c80973a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='mccualey'/>
               <div className='secondAbout'>
                   <h1>MCCAULEY FIN</h1>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   <p>Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum</p>
                   
               </div>
           </div>
        </div>
    );
};

export default About;