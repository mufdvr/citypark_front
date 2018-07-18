import feedback from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: [],
  errors: {}
}

export default (state = initialState, action) =>
  feedback.reducer(
    state,
    action,
    [
      types.NEWS_INDEX,
      types.NEWS_SHOW,
    ]
  )
