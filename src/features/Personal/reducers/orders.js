import feedback from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: false,
  errors: {}
}

export default (state = initialState, action) =>
  feedback.reducer(
    state,
    action,
    [
      types.ORDERS_INDEX
    ]
  )
