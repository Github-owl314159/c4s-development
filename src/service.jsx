import React from 'react';

class Service extends React.Component {
    render() {
        return (
            <div className='service'>
            {this.props.children}
            </div>
        );
    }
}

export default Service;