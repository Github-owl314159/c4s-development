import React from 'react';
import './styles/about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about" id='about'>
                <h2>Willkommen bei<br />cloud4service.de
                <hr />
                </h2>
                <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi facere ipsam facilis. Eum tempora rem quo dolores voluptatum, ipsum voluptates ut magnam esse sunt, fuga fugit nisi ducimus quia!</p>
                <div className="about_p_box">
                    <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere officia laudantium enim molestiae delectus.</p>

                    {/* <p id="p3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim consectetur quos architecto corrupti cumque atque dicta, nisi nemo consequatur repellat sunt illum voluptatibus ab commodi debitis, facere quia deleniti eum ut totam unde facilis. Perspiciatis corporis nam amet assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, vero. </p> */}
                </div>
            </div>);
    }
}

export default About;