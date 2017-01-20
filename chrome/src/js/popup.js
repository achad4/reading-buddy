
import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/Text';
import { createStore, applyMiddleware, compose } from 'redux';
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

store.dispatch(actions.changeBody());

ReactDOM.render(<Text store={store} />, document.getElementById('app-container'));
