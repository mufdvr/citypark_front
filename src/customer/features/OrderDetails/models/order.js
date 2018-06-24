const order = {
  delivery_times: null,
  name: '',
  phone: '',
  city: 'Белореченск',
  street: '',
  house: '',
  apartment: '',
  comment: '',
  dishes_orders_attributes: [],
}

export const createOrder = props => ({
  ...order,
  ...props
})
