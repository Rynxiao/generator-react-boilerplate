import React from 'react';
import { Link } from 'react-router-dom';
import Template from 'components/common/Template';

class Contact extends React.Component {
    render() {
        return (
            <div className="about-component">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="/">App</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li className="active"><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <h2>Contact Page</h2>
            </div>
        );
    }
}

Contact.displayName = 'Contact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Template(Contact);
