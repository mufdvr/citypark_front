import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getUser = () =>
  feedback.get(
    apiConst.PROFILE,
    types.USER
  )
