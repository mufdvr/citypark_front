import { getStatus, getAction, statuses } from 'feedback'
import { pushInPayload } from 'utils'
import * as types from '../actionTypes'

export default (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.CATEGORIES_SHOW:
        return pushInPayload(state, {
          categories: state.payload.categories.map(category =>
            category.id === action.payload.category.id ?
              {
                ...category,
                dishes: action.payload.category.dishes
              }
            : category
          )
        })
      default:
    }
}
