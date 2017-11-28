import React from 'react';
import { renderRoutes } from 'react-router-config'

class Child extends React.Component {

    render() {
        return (
            <div className="child-component">
                <h2>Child</h2>
                Please edit src\components\Child.js to update this component!
                { renderRoutes(this.props.route.routes, { someProp: 'these extra props are optional' }) }
            </div>
        );
    }
}

Child.displayName = 'Child';
Child.propTypes = {};
Child.defaultProps = {};

export default Child;
