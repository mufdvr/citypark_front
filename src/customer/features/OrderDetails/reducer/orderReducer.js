import * as types from '../actionTypes'
import { pushInPayload } from 'utils'

export default (state, action) => {
  switch (action.type) {
    case types.LOAD_ORDER_FROM_LOCALSTORAGE:
      const order = JSON.parse(localStorage.getItem("order"))
      return order ? pushInPayload(state, {
        order
      }) : state

    default:
      return false
  }
}
