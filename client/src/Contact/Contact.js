import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';


class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Si senora</h1>
                <form>
                    <input placeholder='First Name' type='text' name='' value='' required/>
                    <input placeholder='Last Name' type='text' name='' value='' required/>
                    <input placeholder='E-mail' type='email' name='' value='' required/>
                    <textarea placeholder='Message' name='' value=''required />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default Contact;