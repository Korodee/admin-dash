import { combineReducers } from 'redux';
import authReducer from './auth';


const rootReducer = combineReducers({
    Auth: authReducer,
});

export default rootReducer;