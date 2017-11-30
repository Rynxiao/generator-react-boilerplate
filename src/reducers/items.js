import { fromJS } from 'immutable';
import { GET_ITEMS } from '../actions/const';

const initialState = fromJS({
    items: [
        {
            "forum_name": "武汉大学",
            "user_level": 12,
            "user_exp": 5301,
            "id": 30996,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "小说",
            "user_level": 11,
            "user_exp": 4524,
            "id": 59099,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u8003\u7814",
            "user_level": 10,
            "user_exp": 3935,
            "id": 825,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u5996\u7cbe\u7684\u5c3e\u5df4",
            "user_level": 9,
            "user_exp": 3861,
            "id": 1498934,
            "is_like": 1,
            "favo_type": 2
        },
        { "forum_name": "gif", "user_level": 9, "user_exp": 3770, "id": 16098, "is_like": 1, "favo_type": 2 },
        {
            "forum_name": "\u7d20\u63cf",
            "user_level": 8,
            "user_exp": 3479,
            "id": 36417,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u795e\u63a7\u5929\u4e0b",
            "user_level": 7,
            "user_exp": 3177,
            "id": 1520593,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u82f1\u96c4\u4e09\u56fd",
            "user_level": 6,
            "user_exp": 2270,
            "id": 3445247,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u82f1\u96c4\u4e09\u56fd\u793c\u5305",
            "user_level": 5,
            "user_exp": 2209,
            "id": 4520455,
            "is_like": 1,
            "favo_type": 2
        },
        {
            "forum_name": "\u9f99\u4e4b\u8c37",
            "user_level": 3,
            "user_exp": 1986,
            "id": 1249052,
            "is_like": 1,
            "favo_type": 2
        }
    ]
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return state;
        default:
            return state;

    }
}

module.exports = reducer;
