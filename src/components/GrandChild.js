import React from 'react';

class GrandChild extends React.Component {

    render() {
        return (
            <div className="grand-child-component">
                <h2>GrandChild</h2>
                Please edit src\components\GrandChild.js to update this component!
                <div>{ this.props.someProp }</div>
            </div>
        );
    }
}

GrandChild.displayName = 'GrandChild';
GrandChild.propTypes = {};
GrandChild.defaultProps = {};

export default GrandChild;
