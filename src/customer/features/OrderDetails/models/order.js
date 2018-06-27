import { isValidNumber } from 'libphonenumber-js'

const order = {
  delivery_times: null,
  name: '',
  phone: '+7',
  city: '',
  street: '',
  house: '',
  apartment: '',
  comment: '',
  hull: '',
  entrance: '',
  dishes_orders_attributes: [],
}

export const validOrder = order => {
  let result = []
  const attribs = ['name', 'city', 'street', 'house']
  attribs.forEach(attr => order[attr] === '' && result.push(attr))
  !isValidNumber(order.phone, 'RU') && result.push('phone')
  return result
}

export const createOrder = props => ({
  ...order,
  ...props
})
