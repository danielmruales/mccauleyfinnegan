import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Grow Your Brand</h1>
                <div className='serviceTest'>
                    {/* Works on Chrome Dev Tools */}
                    <div className='marketingPic'> <h2 className='imgTitle'>Marketing</h2> </div> 
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-2179_2_orig.jpg'alt='' className='photoPic'/>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-0984_1_orig.jpg'alt='' className='businessPic'/>
                </div>
                <h1 className='serviceTitle'>Grow Your Brand With MC Finny</h1>
                <div className='marketing'>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-9174_orig.jpg'alt='' className='secondPics'/>
                    <h1 className='marketingTitle'>Marketing</h1>
                </div>
                <div className='photo'>
                    <h1 className='photoTitle'>Photography</h1>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-3437_orig.jpg'alt='' className='secondPics'/>
                </div>
                <div className='business'>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-0860-2_3_orig.jpg'alt='' className='secondPics'/>
                    <h1 className='businessTitle'> Business Consulting</h1>
                </div>
            </div>
        );
    }
}

export default Services;

