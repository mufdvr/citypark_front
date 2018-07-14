import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getOrders = () =>
  feedback.get(apiConst.ORDERS, types.ORDERS_INDEX)
