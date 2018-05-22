const order = {
  name: '',
  phone: '',
  city: 'Белореченск',
  street: '',
  house: '',
  apartment: '',
  comment: '',
  dishes_orders_attributes: []
}

export const createOrder = props => ({
  ...order,
  ...props
})
