import { ADD_ITEM } from './const';

function action(parameter) {
    return { type: ADD_ITEM, parameter };
}

module.exports = action;
