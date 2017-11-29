import { combineReducers } from 'redux';
import items from './items.js';

const reducers = { items };
const combined = combineReducers(reducers);
module.exports = combined;
