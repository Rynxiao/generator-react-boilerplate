import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {

        console.log(this.props);

        return (
            <div className="about-component">
                <h2>About Page</h2>
                <Link to="/">App</Link><br />
                /home <Link to="/home">home</Link><br />
                <Link to="/about">about</Link><br />
                <Link to="/contact">contact</Link><br />
            </div>
        );
    }
}

About.displayName = 'About';
About.propTypes = {};
About.defaultProps = {};

export default About;
