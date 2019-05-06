import React, { Component } from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext();

class GlobalData extends Component {
    constructor(){
        super()
        this.state = {
            contactInfo: [],
            submissions: []
        }
    }

    getContactInfo = () => {
        axios.get('/contact').then(res => {
            this.setState({submissions: res.data})
        })
    }



    postContactInfo = (newContactInfo) => {
        axios.post('/contact', newContactInfo).then(res => {
            this.setState(prevState => ({
                contactInfo: [...prevState.contactInfo, newContactInfo]
            }))
        })
    }



    render() {
        return (
            <Provider value={{
                postContactInfo: this.postContactInfo,
                getContactInfo: this.getContactInfo,
                deleteSubmission: this.deleteSubmission,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default GlobalData;

export function withGlobalData (C) {
    return props => <Consumer> 
                        {value => <C {...value}{...props} />} 
                    </Consumer>
}