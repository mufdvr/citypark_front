import categoriesReducer from './categoriesReducer'
import cartReducer from './cartReducer'
import favoritesReducer from './favoritesReducer'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
  return cartReducer(state, action) ||
  categoriesReducer(state, action) ||
  favoritesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.CATEGORIES_INDEX,
      types.CATEGORIES_SHOW,
      types.NEWS_INDEX,
      types.NEWS_SHOW,
      types.FAVORITES_INDEX,
      types.FAVORITES_DESTROY
    ]
  )
}
