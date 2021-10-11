import React, { Component } from 'react'
import Employee from './employee';

class Home extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <>
                <h2 className="text-center">Home</h2>
                <Employee />
            </>
        );
    }

}

export default Home;