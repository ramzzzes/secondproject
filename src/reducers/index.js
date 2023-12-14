import counterReducer from './counter'
import {combineReducers} from "redux";
import userReducer from './user';

const allReducers = combineReducers({
    counterReducer : counterReducer
})

export default allReducers
