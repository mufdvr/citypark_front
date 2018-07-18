export const filterCart = cart =>
  cart && cart.map(item => ({
    dish_id: item.id,
    dish_count: item.count
  }))

export const cartTotal = cart => {
  let total = 0
  cart && cart.forEach(item => total += item.cost * item.count)
  total -= Math.floor(total / 100) * 10
  return total
}
