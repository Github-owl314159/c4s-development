import React from "react";
import Clients from './clients';
import Contact from './contact';

class Bot extends React.Component {
    render() {
        return ( 
        <React.Fragment>
            <Clients />
            <Contact />
        </React.Fragment>
        )
    }
}

export default Bot;
