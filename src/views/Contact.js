import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div className="about-component">
                <h2>Contact Page</h2>
                <Link to="/">App</Link><br />
                /home <Link to="/home">home</Link><br />
                <Link to="/about">about</Link><br />
                <Link to="/contact">contact</Link><br />
            </div>
        );
    }
}

Contact.displayName = 'Contact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
