import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import {Link} from 'react-router-dom'
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
                    <div className='marketingTitle'>
                        <h1>Marketing</h1>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                    </div>
                </div>
                <div className='photo'>
                    <div className='photoTitle'>
                        <h1>Photography</h1>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <Link className='picsBtn'>View Pics!</Link>
                    </div>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-3437_orig.jpg'alt='' className='secondPics' onClick={() => this.props.history.push('/photography')} />
                </div>
                <div className='business'>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/img-0860-2_3_orig.jpg'alt='' className='secondPics'/>
                    <div className='businessTitle'> 
                        <h1>Business Consulting</h1>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;

