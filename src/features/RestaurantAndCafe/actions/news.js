import feedback from 'feedback'
import * as api from '../apiConst'
import * as types from '../actionTypes'

export const getNews = limit =>
  feedback.get(
    limit ? api.NEWS + '?limit=' + limit : api.NEWS,
    types.NEWS_INDEX
  )

export const showNews = id =>
  feedback.get(api.NEWS + id, types.NEWS_SHOW)

export const selectNews = id => ({
  id,
  type: types.NEWS_SELECT + feedback.statuses.SUCCESS
})
