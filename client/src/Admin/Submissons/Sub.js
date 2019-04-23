import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import {withGlobalData} from '../../GlobalData.js'
import './Sub.css'
import axios from 'axios'

class Sub extends Component {

    componentDidMount(){
        this.props.getContactInfo()
        // this.props.deleteSubmission();
    }

    deleteSubmission = (e) => {
        e.preventDefault();
        axios.delete(`/contact/${e.target.name}`)

    }

    render() {

        const mappedSubmissions = this.props.submissions.map((submission) => {
            return (
                <div className='submissionsDiv' key={submission._id} onSubmit={this.deleteSubmission}>
                    <h1> First Name: {submission.firstName}</h1>
                    <h2>Last Name:{submission.lastName}</h2>
                    <h2 >Email: {submission.email}</h2>
                    <h3>Messsage: {submission.message}</h3>
                    <form className='deleteBtn' action='' name={submission._id} onClick={this.deleteSubmission}> <button >Delete</button></form>
                </div>
            )
        })
        return (
            <div>
                <Nav/>
                    <div className="grid">
                        {mappedSubmissions}
                        
                    </div>
            </div>
        );
    }
}

export default withGlobalData(Sub);