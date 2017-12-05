import React from 'react';
import PropTypes from 'prop-types';
import Template from 'components/common/Template';

class About extends React.Component {
    componentDidMount() {
        this.props.actions.getAsyncItem({
            code: 'utf-8',
            q: '图书'
        });
    }

    render() {
        const { items } = this.props;
        const books = items.get('books');

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
                            <a className="navbar-brand" href="/">主页</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="/home">我的贴吧</a></li>
                                <li className="active"><a href="/about">我的图书</a></li>
                                <li><a href="/contact">联系我们</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>图书种类</th>
                            <th>图书数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((l, index) => {
                                return (
                                    <tr key={ `book${index}` }>
                                        <td>{ l.get(0) }</td>
                                        <td>{ l.get(1) }</td>
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

About.displayName = 'About';
About.propTypes = {
    actions: PropTypes.shape({
        getAsyncItem: PropTypes.func
    }),
    items: PropTypes.shape({})
};
About.defaultProps = {};

export default Template(About);
