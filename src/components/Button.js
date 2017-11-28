import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './button.cssmodule.less';

class Button extends React.Component {

    render() {
        return (
            <div className="button-component" styleName="button-component">
                Please edit src\components\Button.js to update this component!
            </div>
        );
    }
}

Button.displayName = 'Button';
Button.propTypes = {};
Button.defaultProps = {};

export default cssmodules(Button, styles);
