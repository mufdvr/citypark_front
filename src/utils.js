export const toPayload = (state, payload) => ({
  ...state,
  fetching: null,
  payload
})

export const filterCart = cart =>
  cart && cart.map(item => ({
    dish_id: item.id,
    dish_count: item.count
  }))

export const cartTotal = cart => {
  const total = cart.reduce((sum, item) => sum += item.cost * item.count, 0)
  return total - Math.floor(total / 100) * 10 //скидка
}
