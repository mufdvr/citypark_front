import categoriesReducer from './categoriesReducer'
import cartReducer from './cartReducer'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) =>
  cartReducer(state, action) ||
  categoriesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.CATEGORIES_INDEX,
      types.CATEGORIES_SHOW,
      types.NEWS_INDEX,
      types.NEWS_SHOW
    ]
  )
