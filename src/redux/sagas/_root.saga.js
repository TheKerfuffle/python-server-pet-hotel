import { all } from 'redux-saga/effects';
import addSaga from './add.saga';


export default function* rootSaga(){
    yield all([
        addSaga(),
    ]);
}