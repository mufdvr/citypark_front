import { cartTotal } from 'utils'

export const deliveryAndTotalCost = (cart, delivery = true) => {
  const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY, REACT_APP_DELIVERY_COST } = process.env
  let totalCost = cartTotal(cart)
  let freeDelivery = true
  if (delivery && totalCost < Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY)) {
    freeDelivery = false
    totalCost += Number(REACT_APP_DELIVERY_COST)
  }
  return {
    totalCost,
    freeDelivery
  }
}

export const deliveryCost = (cartCost) => {
  const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY, REACT_APP_DELIVERY_COST } = process.env
  return cartCost < Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY) ?
    cartCost + Number(REACT_APP_DELIVERY_COST)
  : 0
}