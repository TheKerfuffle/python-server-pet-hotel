import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas/_root.saga';
import rootReducer from './src/redux/reducers/_root.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


