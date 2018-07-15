import * as types from '../actionTypes'

export const addToCart = (id, title, cost, images) => ({
  type: types.CART_ADD_DISH,
  payload: {
    id,
    title,
    cost,
    images
  }
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
