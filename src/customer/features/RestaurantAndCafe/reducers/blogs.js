import feedback, { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  loaded: false,
  fetching: null,
  blogsitem: {},
  payload: [],
  errors: {}
}

const blogsReducer = (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.BLOGS_INDEX:
        state.payload.forEach(stateItem => {
          action.payload[action.payload.findIndex(actionItem => actionItem.id === stateItem.id)] = stateItem
        })
        return {
          ...state,
          fetching: null,
          loaded: true,
          payload: action.payload
        }
      case types.BLOGS_SELECT:
        return {
          ...state,
          blogsitem: state.payload[state.payload.findIndex(blog => blog.id === action.id)]
        }
      case types.BLOGS_SHOW: {
        let payload = [...state.payload]
        let selected
        if (state.loaded) {
          selected = state.payload.findIndex(blog => blog.id === action.payload.id)
          payload[selected] = action.payload
        } else selected = payload.push(action.payload) - 1
        return {
          ...state,
          fetching: null,
          payload,
          blogsitem: payload[selected]
        }
      }
      default: return false
    }
}

export default (state = initialState, action) =>
  blogsReducer(state, action) ||
  feedback.reducer(state, action, [
    types.BLOGS_INDEX,
    types.BLOGS_SHOW
  ])
