import { isValidNumber } from 'libphonenumber-js'

const order = {
  delivery_times: null,
  name: '',
  phone: '+7',
  email: '',
  city: 'Белореченск',
  street: '',
  comment: '',
  delivery: true,
  payment_type: 'cash',
  surrender_from: 0,
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
