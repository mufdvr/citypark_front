import feedback from 'feedback'
import * as types from '../actionTypes'
//import orderReducer from './orderReducer'

export default (state, action) =>
  //orderReducer(state, action) ||
  feedback.reducer(state, action, [types.ORDERS_CREATE])
