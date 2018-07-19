import { toPayload } from 'utils'
import feedback from 'feedback'
import * as types from './actionTypes'

const initialState = {
  fetching: null,
  payload: {},
  errors: {}
}

const orderReducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_ORDER_FROM_LOCALSTORAGE:
      const order = JSON.parse(localStorage.getItem("order"))
      return order ? toPayload(state, order) : state
    default: return false
  }
}

export default (state = initialState, action) =>
  orderReducer(state, action) ||
  feedback.reducer(state, action, [types.ORDERS_CREATE])
