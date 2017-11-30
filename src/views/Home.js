import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Template from 'components/common/Template';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getItems();
    }

    render() {
        let { items } = this.props;
        let list = items.get('items');
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
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>论坛名字</th>
                            <th>用户等级</th>
                            <th>经验值</th>
                            <th>是否收藏</th>
                            <th>喜欢</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((l, index) => {
                                return (
                                    <tr key={ `list${index}` }>
                                        <td>{ l.get('forum_name') }</td>
                                        <td>{ l.get('user_level') }</td>
                                        <td>{ l.get('user_exp') }</td>
                                        <td>{ l.get('is_like') === 0 ? '是' : '否' }</td>
                                        <td>{ l.get('favo_type') }</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

Home.displayName = 'Home';
Home.propTypes = {};
Home.defaultProps = {};

export default Template(Home);
