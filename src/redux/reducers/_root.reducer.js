import {combineReducers} from 'redux';
import ownersReducer from './owners.reducer';

const rootReducer = combineReducers({
    ownersReducer,
});

export default rootReducer;