import { CALL_API } from '../middlewares/const';
import { createAction, createAsyncAction } from '../middlewares/utils';
import {
    GET_ITEMS,
    ADD_ITEM,
    GET_ASYNC_ITEM_REQUEST,
    GET_ASYNC_ITEM_SUCCESS
} from './const';

const getItems = createAction(GET_ITEMS);
const addItem = createAction(ADD_ITEM);

const getAsyncItem = params => {
    return createAsyncAction(
        GET_ASYNC_ITEM_REQUEST,
        {
            [CALL_API]: {
                url: 'sug',
                method: 'get',
                type: 'jsonp',
                success: GET_ASYNC_ITEM_SUCCESS,
                params
            }
        }
    );
};

module.exports = {
    getItems,
    addItem,
    getAsyncItem
};
