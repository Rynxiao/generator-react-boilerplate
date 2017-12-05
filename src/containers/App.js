/* eslint arrow-body-style: 0 max-len: 0 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../stores';
import routes from '../routes/';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = configureStore(history, {});

const App = () => {
    return (
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <BrowserRouter>{ routes }</BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
