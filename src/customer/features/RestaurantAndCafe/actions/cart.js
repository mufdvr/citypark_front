import * as types from '../actionTypes'

export const addToCart = (id, title, cost) => ({
  type: types.CART_ADD_DISH,
  payload: {
    id,
    dish: {
    title,
    cost,
  }
  }
})

export const changeCount = (id, amount) => ({
  type: types.CART_CHANGE_ITEM_COUNT,
  payload: {
    id,
    amount
  }
})
