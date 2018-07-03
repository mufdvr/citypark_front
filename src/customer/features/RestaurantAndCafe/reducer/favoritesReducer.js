import { pushInPayload } from 'utils'
import { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

export default (state, action) => {
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
