import * as types from './actionTypes'

const initialState = {
  payload: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CART_ADD_DISH:
      let items = state.payload.slice(0)
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === action.payload.id) {
          items[i].count += 1
          break
        } else if (i === items.length - 1) items = []
      }
      return {
        ...state,
        payload: items.length ? items : [...state.payload, { ...action.payload, count: 1 }]
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

    case types.LOAD_CART_FROM_LOCALSTORAGE:
      const cart = JSON.parse(localStorage.getItem("cart"))
      return cart ? {
        ...state,
        payload: cart
      } : state

    case types.CLEAR_CART:
      return { ...state, payload: []}

    default: return state
  }
}
