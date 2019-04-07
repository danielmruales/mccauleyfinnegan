import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            
            <SocialIcon url='https://www.instagram.com/mc_finny/' target='_blank'bgColor="none" fgColor='#333333' />
            <SocialIcon url='https://www.gmail.com' target='_blank'bgColor="none" fgColor='#333333' />
            <SocialIcon url='https://www.facebook.com/people/McCauley-Finnegan/100004868508157' fgColor="#333333" bgColor='none' target='_blank'/>
            
        </div>
    );
};

export default Footer;