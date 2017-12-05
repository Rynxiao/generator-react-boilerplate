import { UPDATE_G_PROPERTY } from './const';
import { createAction } from '../middlewares/utils';

const updateGProperty = createAction(UPDATE_G_PROPERTY);


module.exports = {
    updateGProperty
};
