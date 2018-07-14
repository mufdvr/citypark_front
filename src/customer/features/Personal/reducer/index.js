import favoritesReducer from './favoritesReducer'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
  return favoritesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.USER,
      types.FAVORITES_INDEX,
      types.FAVORITES_DESTROY,
      types.ORDERS_INDEX
    ]
  )
}
