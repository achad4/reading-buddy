
import React from 'react';
import ReactDOM from 'react-dom';
import TextContainer from './components/TextContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as actions from './actions';
import reducer from './reducers'

let initialState = {
  body: 'This is the body'
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <TextContainer />
  </Provider>,
  document.getElementById('app-container'));
