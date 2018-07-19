import * as types from './actionTypes'

const initialState = {
  payload: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CART_ADD_ITEMS: {
      let result = state.payload
      action.payload.forEach(item => {
        item.count = item.count || 1
        let found = false
        for (let i = 0; i < state.payload.length; i++) {
          if (state.payload[i].id === item.id) {
            state.payload[i].count += item.count
            found = true
            break
          } else if (i === state.payload.length - 1) found = false
        }
        result = found ? [ ...result, ...state.payload ] : [ ...result, item ]
      })
      return {
        ...state,
        payload: result
      }
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
