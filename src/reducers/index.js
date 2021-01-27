import changeNumProd from './changeNumProd';
import basket from './basket';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    changeNumProd,
    basket
});

export default allReducers;