import * as types from '../constants/actionTypes';

export const changeBody = body => ({
  type: types.CHANGE_BODY,
  body,
});

export function fetchBody() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {


    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://127.0.0.1:5000/document`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(changeBody(json['text']))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
