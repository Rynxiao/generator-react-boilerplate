/**
 * 判断是否为异步请求
 * @param callApi Boolean
 */
const isFetch = callApi => !!callApi;

/**
 * 创建异步Action
 * @param type      类型
 * @param payload   参数
 * @param error     错误信息
 * @param meta      元数据
 * @returns {{type: *, payload: *, error: boolean, meta: (*|{})}}
 */
const createAsyncAction = (type, payload, error, meta) => {
    return {
        type,
        payload,
        error: Boolean(error),
        meta: meta || {}
    };
};

/**
 * 创建Action
 * @returns {function(*, *)}
 */
const createAction = (type, payload) => {
    return () => {
        return { type, payload };
    };
};

const throwError = err => {
    const error = new Error('出现未知错误码');
    error.response = err;
    throw error;
};

module.exports = {
    isFetch,
    createAction,
    createAsyncAction,
    throwError
};
