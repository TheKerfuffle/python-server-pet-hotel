import {put, takeLatest} from "@redux-saga/core/effects";
import axios from "axios";

function* addOwner(action){
    try {
        yield axios.post('/api/owners', action.payload);
        yield put({type: 'FETCH_OWNERS'});
    } catch(error) {
        console.log('Error with adding a owner', error);
    }
}

function* addOwnerSaga(){
    yield takeLatest('ADD_OWNER', addOwner);
}

export default addOwnerSaga;