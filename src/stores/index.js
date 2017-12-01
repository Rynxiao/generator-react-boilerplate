import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import config from 'config';

import reducers from '../reducers';

const loggerMiddleware = createLogger({ collapsed: true });
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function reduxStore(history, initialState) {

    // Build the middleware for intercepting and dispatching navigation actions
    const rMiddleware = routerMiddleware(history);
    const middlewares = [rMiddleware];

    if (config.appEnv === 'dev') {
        middlewares.unshift(loggerMiddleware);
    } else {
        composeEnhancers = compose;
    }

    const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStoreWithMiddleware(createStore)(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        initialState
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            // We need to require for hot reloading to work properly.
            const nextReducer = require('../reducers');  // eslint-disable-line global-require

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default reduxStore;
