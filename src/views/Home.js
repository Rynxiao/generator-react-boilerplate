import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { addItem, getItems } from 'actions/';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Home DID Mount');
        this.props.actions.getItems();
    }

    render() {
        return (
            <div className="home-component">
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
                                <li className="active"><a href="/home">Home</a></li>
                                <li><a href="/About">About</a></li>
                                <li><a href="/Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Home.displayName = 'Home';
Home.propTypes = {};
Home.defaultProps = {};

function mapStateToProps(state) {
    // const items = state.items;
    // const data = items.get('items');
    // console.log('items', items);
    // console.log('data', data);
    return {

    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        addItem,
        getItems
    };

    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
