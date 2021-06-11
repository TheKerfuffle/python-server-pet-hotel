import { all, takeEvery } from 'redux-saga/effects';
import addSaga from './add.saga';
import fetchOwners from './fetchOwners.saga'


export default function* rootSaga(){
    yield takeEvery('FETCH_OWNERS', fetchOwners);
    yield all([
        addSaga(),
    ]);
}