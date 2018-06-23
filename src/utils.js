export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})

export const filterCart = cart =>
  cart && cart.map(item => ({
    dish_id: item.id,
    dush_count: item.count
  }))

export const cartTotal = cart => {
  let total = 0
  cart && cart.forEach(item => total += item.cost * item.count)
  return total
}
