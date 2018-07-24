import feedback, { getStatus, getAction, statuses } from 'feedback'
import * as types from '../actionTypes'

const initialState = {
  loaded: false,
  fetching: null,
  newsitem: {},
  payload: [],
  errors: {}
}

const newsReducer = (state, action) => {
  if (getStatus(action.type) === statuses.SUCCESS)
    switch (getAction(action.type)) {
      case types.NEWS_INDEX:
        state.payload.forEach(stateItem => {
          action.payload[action.payload.findIndex(actionItem => actionItem.id === stateItem.id)] = stateItem
        })
        return {
          ...state,
          fetching: null,
          loaded: true,
          payload: action.payload
        }
      case types.NEWS_SELECT:
        return {
          ...state,
          newsitem: state.payload[state.payload.findIndex(news => news.id === action.id)]
        }
      case types.NEWS_SHOW: {
        let payload = [...state.payload]
        let selected
        if (state.loaded) {
          selected = state.payload.findIndex(news => news.id === action.payload.id)
          payload[selected] = action.payload
        } else selected = payload.push(action.payload) - 1
        return {
          ...state,
          fetching: null,
          payload,
          newsitem: payload[selected]
        }
      }
      default: return false
    }
}

export default (state = initialState, action) =>
  newsReducer(state, action) ||
  feedback.reducer(state, action, [
    types.NEWS_INDEX,
    types.NEWS_SHOW
  ])
