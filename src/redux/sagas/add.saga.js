import {put, takeLatest} from "@redux-saga/core/effects";
import axios from "axios";

function* addPet(action){
    try {
        yield axios.post('/api/pets', action.payload);
        yield put({type: 'GET_PETS'});
    } catch(error) {
        console.log('Error with adding a game', error);
    }
}

function* addPetSaga(){
    yield takeLatest('ADD_NEW_PET', addPet);
}

export default addPetSaga;