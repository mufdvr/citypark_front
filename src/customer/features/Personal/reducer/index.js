import favoritesReducer from './favoritesReducer'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
  return favoritesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.USER_SHOW,
      types.USER_UPDATE,
      types.USER_CREATE,
      types.USER_CREATE_SESSION,
      types.USER_DESTROY,
      types.FAVORITES_INDEX,
      types.FAVORITES_DESTROY,
      types.ORDERS_INDEX
    ]
  )
}
