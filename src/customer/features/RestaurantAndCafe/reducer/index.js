import categoriesReducer from './categoriesReducer'
import feedback from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
  return categoriesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.CATEGORIES_INDEX,
      types.CATEGORIES_SHOW,
      types.NEWS_INDEX,
      types.NEWS_SHOW,
    ]
  )
}
