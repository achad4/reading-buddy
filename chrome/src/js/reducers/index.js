import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';

function body( state = '', action) {
  switch(action.type) {
    case types.CHANGE_BODY:
      return action.body;
    default:
      return state;
  }
}

export default combineReducers({
  body,
});
