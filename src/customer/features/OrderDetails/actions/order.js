import * as types from '../actionTypes'
import * as apiConst from '../apiConst'
import feedback from 'feedback'

export const createOrder = order =>
  feedback.post(
    apiConst.ORDERS,
    types.ORDERS_CREATE,
    { order }
  )
