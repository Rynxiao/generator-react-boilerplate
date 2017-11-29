import React from 'react';
import { Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import YeomanImage from './YeomanImage';
import Button from './Button';
import './app.css';

class AppComponent extends React.Component {

    render() {
        return (
            <div className="index">
                <YeomanImage />
                <div className="notice">
                    Please edit <code>src/components/App.js</code> to get started!
                </div>
                dddd
                <Button />
                { renderRoutes(this.props.route.routes) }
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
