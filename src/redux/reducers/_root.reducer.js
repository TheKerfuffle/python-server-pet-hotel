import {combineReducers} from 'redux';
import pets from './pet.reducer';

const rootReducer = combineReducers({
    pets,
});

export default rootReducer;