import React, { Component } from 'react';
import Nav from '../Nav/Nav.js'
import {withGlobalData} from '../../GlobalData.js'
import './Sub.css'

class Sub extends Component {

    componentDidMount(){
        this.props.getContactInfo()
    }

    render() {

        const mappedSubmissions = this.props.submissions.map((submission, i) => {
            return (
                <div className='submissionsDiv'>
                    <h1 className='firstNameSub'> First Name: {submission.firstName}</h1>
                    <h2 className='lastNameSub'>Last Name:{submission.lastName}</h2>
                    <h2 className='emailSub'>Email: {submission.email}</h2>
                    <h3 className='messageSub'>Message: {submission.message}</h3>
                </div>
            )
        })
        return (
            <div>
                <Nav/>
                {mappedSubmissions}
            </div>
        );
    }
}

export default withGlobalData(Sub);