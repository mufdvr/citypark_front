const userSession = {
  email: '',
  password: '',
  remember_me: true
}

const userRegistartion = {
  email: '',
  name: '',
  password: '',
  password_confirmation: ''
}

export const createUserSession = props => ({
  ...userSession,
  ...props
})

export const createUserRegistration = props => ({
  ...userRegistartion,
  ...props
})
