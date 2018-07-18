import { pushInPayload } from 'utils'
import feedback, { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: false,
  errors: {}
}

const favoritesReducer = (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.FAVORITES_DESTROY:
        return pushInPayload(state, {
          favorites: state.payload.favorites.filter(item => item.id !== action.payload.id)
        })
      case types.ADD_TO_FAVORITES:
        return pushInPayload(state, {
          favorites: [...state.payload.favorites, action.payload.favorite_dish]
        })
      default:
        return false
    }
}

export default (state = initialState, action) =>
  favoritesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.FAVORITES_INDEX,
      types.FAVORITES_DESTROY,
    ]
  )
