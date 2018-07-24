const userSession = {
  email: '',
  password: '',
  remember_me: true
}

const userData = {
  email: '',
  name: '',
  phone: '+7',
}

export const createUserSession = props => ({
  ...userSession,
  ...props
})

export const createUserData = props => ({
  ...userData,
  ...props
})
