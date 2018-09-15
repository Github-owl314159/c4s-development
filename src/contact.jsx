import React from 'react';
import './styles/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='contact' id='contact'>
                    <h3>Nehmen Sie noch heute mit uns den Kontakt auf!<hr></hr></h3>
                    <div class="contact-container">
                        <div class="contact-left_box">
                            <h6 id="contact-h6_1">Lassen Sie uns einzigartige Einsparungen mit einer IT-Container-Virtualisierung
                    ausrechnen.</h6>

                            <h6 id="contact-h6_2">Machen Sie mit uns einen IT Mini Health Check und lernen Sie uns näher kennen.</h6>
                        </div>
                        <div class="contact-left_box2">
                            <i class="fas fa-mobile-alt"></i>
                            <p>(0160)-4872908</p>
                            <i class="fas fa-envelope"></i>
                            <p>musterman@me.com</p>
                        </div>
                    </div>
                    <form action="index.html" method="GET">
                        <input type="text" placeholder="Name *" />
                        <input type="text" placeholder="Email *" required />
                        <textarea placeholder="Nachricht">
                        </textarea>
                        <input type="submit" value="Nachricht abschicken" />
                    </form>
                </div>
                <div className='footer'>
                    <p>
                        Copyright &copy; 2017-2018 cloud4service.de
            <a href="#">Nach oben</a>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
