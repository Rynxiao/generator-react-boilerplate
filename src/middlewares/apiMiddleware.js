/* eslint no-console: 0 */

import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { BASE_PATH_NAME, CALL_API, LOAD_STATUS } from './const';
import { isFetch, createAction, throwError } from './utils';
import { UPDATE_G_PROPERTY } from '../actions/const';

const apiMiddleware = ({ getState }) => next => action => {
    const callApi = action.payload && action.payload[CALL_API];
    const p = {};

    if (!isFetch(callApi)) {
        return next(action);
    }

    // 更新加载状态为loading
    next(createAction(UPDATE_G_PROPERTY, LOAD_STATUS.LOADING)());

    const { url, params, type, success } = callApi;
    const method = callApi.method;
    p.baseURL = BASE_PATH_NAME;
    p.method = method;

    if (type === 'jsonp') {
        p.adapter = jsonpAdapter;
    }

    if (method === 'post') {
        p.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        p.data = params;
    } else {
        p.params = params;
    }

    axios(url, p).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        // 更新加载状态为status_error
        next(createAction(UPDATE_G_PROPERTY, LOAD_STATUS.STATUS_ERROR)());
        return throwError(response, response.statusText);
    })
    .then(res => {
        const data = res.data;
        if (data.errcode) {
            // 更新加载状态为code_error
            next(createAction(UPDATE_G_PROPERTY, LOAD_STATUS.CODE_ERROR)());
            return throwError(data, data.errmsg || data.message);
        }
        return data;
    })
    .then(data => {
        next(createAction(UPDATE_G_PROPERTY, LOAD_STATUS.COMPLETE)());
        return next(createAction(success, data)());
    });

    return next(action);
};

export default apiMiddleware;
