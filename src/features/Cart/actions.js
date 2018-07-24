import * as types from './actionTypes'


export const addItems = payload => ({
  type: types.CART_ADD_ITEMS,
  payload
})

export const changeCount = (id, amount) => ({
  type: types.CART_CHANGE_ITEM_COUNT,
  payload: {
    id,
    amount
  }
})

export const deleteItem = id => ({
  type: types.CART_DELETE_ITEM,
  id
})

export const loadCartFromLocalstorage = () => ({
  type: types.LOAD_CART_FROM_LOCALSTORAGE
})

export const clearCart = () => ({
  type: types.CLEAR_CART
})
