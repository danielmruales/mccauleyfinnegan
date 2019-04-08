import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Contact.css'
import { withGlobalData } from '../GlobalData.js';


class Contact extends Component {

    constructor(){
        super()
        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }
    
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }


    handleSumbit = e => {
        e.preventDefault()
    }
    


    render() {
        return (
            <div>
                <Navbar/>
                <h1 className='contactTitle'>Want To Chat?</h1>
                <form className='contactForm'>
                    <input placeholder='First Name' type='text' name='firstName' value='' required/>
                    <input placeholder='Last Name' type='text' name='lastName' value='' required/>
                    <input placeholder='E-mail' type='email' name='email' value='' required/>
                    <textarea placeholder='Message' name='' value='message'required />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default withGlobalData(Contact);