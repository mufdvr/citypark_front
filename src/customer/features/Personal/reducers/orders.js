import feedback from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: false,
  errors: {}
}

export default (state = initialState, action) => {
  console.log(state);
  return feedback.reducer(
    state,
    action,
    [
      types.ORDERS_INDEX
    ]
  )
}
