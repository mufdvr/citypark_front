import feedback, { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  fetching: null,
  payload: [],
  errors: {}
}

const categoriesReducer = (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.CATEGORIES_SHOW:
        return {
          ...state,
          payload: state.payload.map(category =>
            category.id === action.payload.id ?
              {
                ...category,
                dishes: action.payload.dishes
              }
            : category
          )
        }
      default: return false
    }
}

export default (state = initialState, action) =>
  categoriesReducer(state, action) ||
  feedback.reducer(
    state,
    action,
    [
      types.CATEGORIES_INDEX,
      types.CATEGORIES_SHOW,
    ]
  )
