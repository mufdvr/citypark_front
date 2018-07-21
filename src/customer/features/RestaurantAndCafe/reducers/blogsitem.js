import feedback from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: null,
  errors: {}
}

export default (state = initialState, action) =>
  feedback.reducer(state, action, [types.BLOGS_SHOW])
