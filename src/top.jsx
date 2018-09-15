import React from 'react';
import './styles/header.css';
import Sidebar from './Sidebar';

class Top extends React.Component {
    render() {
        return (
                <div className="header">
                    <Sidebar/>
                    <div className="brand-wrapper">
                        <a href="#">cloud4service.de</a>
                    </div>
                    <div className="slogan">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia 
                    </div>
                    <a href="#services" className="slogan-button">
                        Mehr Erfahren!
                    </a>
                    <ul className="navbar">
                        <li><a href="#about">About</a></li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
        )
    }
}

export default Top;