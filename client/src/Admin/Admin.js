import React, { Component } from 'react';
import Nav from './Nav/Nav'
import './Admin.css'
import { withGlobalData } from '../GlobalData.js'

class Admin extends Component {
    render() {
        return (
            <div>
                <Nav/> 
                <h1 className='adminTitle'>Hi Love, this is your Admin Page!</h1>
                <h3 className='subTitle'>It's pretty straight forward what you're able to access via here</h3>
                <img src='https://contexts.org/files/2013/11/JAR-meme-drunk-baby.jpeg'alt='message pic' className='adminPic'/>
            </div>
        );
    }
}

export default withGlobalData(Admin);