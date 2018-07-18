import feedback from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: {},
  errors: {}
}

export default (state = initialState, action) =>
  {
    console.log(state);
  return feedback.reducer(
    state,
    action,
    [
      types.USER_SHOW,
      types.USER_UPDATE,
      types.USER_SIGN_IN,
      types.USER_SIGN_UP,
      types.USER_DESTROY
    ]
  )
}
