import { isValidNumber } from 'libphonenumber-js'

const order = {
  delivery_times: null,
  name: '',
  phone: '+7',
  city: 'Белореченск',
  street: '',
  house: '',
  apartment: '',
  comment: '',
  hull: '',
  entrance: '',
  delivery: true,
  dishes_orders_attributes: [],
}

export const validOrder = order => {
  let result = []
  const attribs = order.delivery ? ['name', 'city'] : ['name']
  attribs.forEach(attr => order[attr] === '' && result.push(attr))
  !(order.phone && isValidNumber(order.phone, 'RU')) && result.push('phone')
  order.delivery && !order.street.isValid && result.push('street')
  return result
}

export const createOrder = props => ({
  ...order,
  ...props
})
