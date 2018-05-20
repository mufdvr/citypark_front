import * as types from '../actionTypes'
import { pushInPayload } from 'utils'

export default (state, action) => {
  switch (action.type) {
    case types.CART_ADD_DISH:
      return pushInPayload(state, {
        cart: state.payload.cart ? {
          ...state.payload.cart,
          [action.payload.id]: {
            ...action.payload.dish,
            count: state.payload.cart[action.payload.id] ? state.payload.cart[action.payload.id].count + 1 : 1
          }
        } : {
          [action.payload.id]: {
            ...action.payload.dish,
            count: 1
          }
        }
      })
     case types.CART_CHANGE_ITEM_COUNT:
        return pushInPayload(state, {
          cart: {
            ...state.payload.cart,
            [action.payload.id]: {
              ...state.payload.cart[action.payload.id],
              count: state.payload.cart[action.payload.id].count += action.payload.amount
            }
          }
        })   

    default: return false
  }
}
