import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from 'actions/';

const Main = MyComponent => {
    class IndexTemplate extends Component {

        shouldComponentUpdate(nextProps, nextState) {
            return !is(fromJS(this.props), fromJS(nextProps))
                || !is(fromJS(this.state), fromJS(nextState));
        }

        render() {
            return <MyComponent { ...this.props } />;
        }
    }

    IndexTemplate.displayName = 'IndexTemplate';
    IndexTemplate.defaultProps = {};

    function mapStateToProps(state) {
        const { items, g } = state;
        return {
            items,
            g
        };
    }

    function mapDispatchToProps(dispatch) {
        return { actions: bindActionCreators(actions, dispatch) };
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexTemplate));
};

export default Main;
