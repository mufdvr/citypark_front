export const pushInPayload = (state, item) => ({
  ...state,
  fetching: 0,
  payload: {
    ...state.payload,
    ...item
  }
})
