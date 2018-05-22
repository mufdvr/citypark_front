export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})

export const filterCart = cart =>
  cart && cart.map(item => {
    delete item.cost
    delete item.title
    return item
  })
