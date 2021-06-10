import {combineReducers} from 'redux';
import pets from './pet.reducer';
import ownersReducer from './owners.reducer';

const rootReducer = combineReducers({
    pets,
    ownersReducer,
});

export default rootReducer;