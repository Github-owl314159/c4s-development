import React from "react";
import About from './about';
import Services from './services';

class Mid extends React.Component {
    render() {
        const content = this.props.content;
        return (
            <React.Fragment>
                <About />
                <Services />
            </React.Fragment>
        )
    }
}

export default Mid;