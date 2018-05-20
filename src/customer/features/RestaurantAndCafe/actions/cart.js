import * as types from '../actionTypes'

export const addToCart = (id, title, cost) => ({
  type: types.ADD_DISH_TO_CART,
  payload: {
    id,
    dish: {
    title,
    cost,
  }
  }
})
