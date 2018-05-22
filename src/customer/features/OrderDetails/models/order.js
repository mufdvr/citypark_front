const order = {
  name: '',
  phone: '',
  city: 'Белореченск',
  street: '',
  house: '',
  apartment: '',
  comment: '',
  dishes: []
}

export const createOrder = props => ({
  ...order,
  ...props
})
