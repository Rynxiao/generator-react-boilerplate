import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import App from './containers/App';
import configureStore from './stores';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <AppContainer>
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <Route exact path="/" component={ App }/>
            </ConnectedRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default; // eslint-disable-line global-require

        ReactDOM.render(
            <AppContainer>
                <Provider store={ store }>
                    <ConnectedRouter history={ history }>
                        <NextApp />
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
