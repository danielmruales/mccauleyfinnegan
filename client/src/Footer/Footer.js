import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <SocialIcon url='http://linkedin.com/in/jaketrent'/>
            <SocialIcon url='http://instagram.com'/>
            <SocialIcon url='http://facebook.com'/>
            

        </div>
    );
};

export default Footer;