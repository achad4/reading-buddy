import * as types from '../constants/actionTypes';

export const changeBody = body => ({
  type: types.CHANGE_BODY, body,
});
