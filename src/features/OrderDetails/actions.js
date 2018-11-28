import * as types from './actionTypes'
import * as apiConst from './apiConst'
import feedback from 'feedback'

export const createOrder = (order, g_recaptcha_response) =>
  feedback.post(
    apiConst.ORDERS,
    types.ORDERS_CREATE,
    {
      order,
      g_recaptcha_response
    }
  )

export const loadOrderFromLocalstorage = () => ({
  type: types.LOAD_ORDER_FROM_LOCALSTORAGE
})

export const orderClear = () => ({
  type: types.ORDERS_CLEAR
})

export const pushOrder = order => ({
  type: types.ORDERS_PUSH,
  payload: order
})