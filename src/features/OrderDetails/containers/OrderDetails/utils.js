import { cartTotal } from 'utils'
import { SETTLEMENTS } from '../../components/DeliveryAddress/constants'

export const deliveryAndTotalCost = (cart, delivery = true, deliveryPrice = SETTLEMENTS[0].price) => {
  const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY } = process.env
  let totalCost = cartTotal(cart)
  if (delivery) {
    deliveryPrice = totalCost < Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY) ? deliveryPrice : deliveryPrice - SETTLEMENTS[0].price
    totalCost += deliveryPrice
  }
  return {
    totalCost,
    deliveryPrice
  }
}