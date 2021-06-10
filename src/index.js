import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/_root.saga';
import rootReducer from './redux/reducers/_root.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


