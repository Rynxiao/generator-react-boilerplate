export const CALL_API = Symbol('call_api');
export const BASE_PATH_NAME = 'https://suggest.taobao.com/';
export const LOAD_STATUS = {
    REQUEST: 'REQUEST',
    LOADING: 'LOADING',
    STATUS_ERROR: 'STATUS_ERROR',
    CODE_ERROR: 'CODE_ERROR',
    COMPLETE: 'COMPLETE'
};

module.exports = {
    CALL_API,
    BASE_PATH_NAME,
    LOAD_STATUS
};
