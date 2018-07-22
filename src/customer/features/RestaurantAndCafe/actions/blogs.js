import feedback from 'feedback'
import * as api from '../apiConst'
import * as types from '../actionTypes'

export const getBlogs = () =>
  feedback.get(api.BLOGS, types.BLOGS_INDEX)

export const showBlogs = id =>
  feedback.get(api.BLOGS + id, types.BLOGS_SHOW)

export const selectBlogs = id => ({
  id,
  type: types.BLOGS_SELECT + feedback.statuses.SUCCESS
})
