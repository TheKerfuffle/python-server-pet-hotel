import axios from "axios";
import {put, takeEvery} from "@redux-saga/core/effects";

function* getPetHistory () {
    try {
        const response = yield axios.get(`/api/pets`);
        yield put({type: 'SET_HISTORY', payload: response.data})
    } catch {
        console.log('error in get pet history');
        
    }
}

function* historySaga() {
    yield takeEvery('GET_HISTORY', getPetHistory);
}

export default historySaga;