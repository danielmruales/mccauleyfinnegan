import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import './Pictures.css'

class Pictures extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1> Here is where you can add Pictures!! </h1>
                <div className='picForm'>
                    <form>
                        <input type='text' placeholder='Image Url' />
                        <input type='text' placeholder='Description of Image'/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Pictures;