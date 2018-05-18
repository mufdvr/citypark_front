import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getCategories = () =>
  feedback.get(apiConst.CATEGORIES, types.CATEGORIES_INDEX)
