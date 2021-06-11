import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchOwners() {
    
    try {
        const owners = yield axios.get('/api/owners');
        console.log('fetch owners', owners.data);
        yield put({type: 'SET_OWNERS', payload: owners.data});
    } catch {
        console.log('get batches error');
    }
}

export default fetchOwners;