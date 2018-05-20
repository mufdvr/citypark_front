import * as types from '../actionTypes'

export const addToCart = (id, title, cost) => ({
  type: types.CART_ADD_DISH,
  payload: {
    id,
    title,
    cost,
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
