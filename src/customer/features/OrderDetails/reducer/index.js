import feedback from 'feedback'
import * as types from '../actionTypes'
import orderReducer from './orderReducer'

const initialState = {
  fetching: null,
  payload: {
    order: {}
  },
  errors: {}
}

export default (state = initialState, action) =>
  orderReducer(state, action) ||
  feedback.reducer(state, action, [types.ORDERS_CREATE])
