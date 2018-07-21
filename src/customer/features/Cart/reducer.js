import * as types from './actionTypes'

const initialState = {
  payload: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CART_ADD_ITEMS: {
      let payload = [...state.payload]
      action.payload.forEach(actionItem => {
        actionItem.count = actionItem.count || 1
        const index = payload.findIndex(payloadItem => payloadItem.id === actionItem.id)
        index !== -1 ? payload[index].count += actionItem.count : payload.push(actionItem)
      })
      return { ...state, payload }
    }

    case types.CART_CHANGE_ITEM_COUNT:
      return {
        ...state,
        payload: state.payload.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count += action.payload.amount } : item
        ).filter(item => item.count > 0)
      }

    case types.CART_DELETE_ITEM:
      return {
        ...state,
        payload: state.payload.filter(item => item.id !== action.id)
      }

    case types.LOAD_CART_FROM_LOCALSTORAGE: {
      const cart = JSON.parse(localStorage.getItem("cart"))
      return cart ? {
        ...state,
        payload: cart
      } : state
    }

    case types.CLEAR_CART:
      return { ...state, payload: []}

    default: return state
  }
}
