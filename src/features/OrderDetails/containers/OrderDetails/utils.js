import { cartTotal } from 'utils'

export const deliveryAndTotalCost = cart => {
  const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY, REACT_APP_DELIVERY_COST } = process.env
  let totalCost = cartTotal(cart)
  let freeDelivery = true
  if (totalCost < Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY)) {
    freeDelivery = false
    totalCost += Number(REACT_APP_DELIVERY_COST)
  }
  return {
    totalCost,
    freeDelivery
  }
}
