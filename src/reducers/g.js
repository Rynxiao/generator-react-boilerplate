/* eslint quote-props: 0 */

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { LOAD_STATUS } from '../middlewares/const';
import { UPDATE_G_PROPERTY } from '../actions/const';

const initialState = fromJS({
    loadStatus: LOAD_STATUS.REQUEST
});

const gReducers = handleActions({
    /**
     * 改变全局加载状态
     * @param state
     * @returns {*}
     */
    [UPDATE_G_PROPERTY](state, action) {
        return state.set('loadStatus', action.payload);
    }
}, initialState);

module.exports = gReducers;
