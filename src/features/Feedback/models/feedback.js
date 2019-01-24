const feedback = {
  name: '',
  email: '',
  subject: '',
  text: ''
}

const validateEmail = (email) => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export const validFeedback = feedback => {
  let result = []
  Object.keys(feedback).forEach(attr => feedback[attr] === '' && result.push(attr))
  !validateEmail(feedback.email) && result.push('email')
  return result
}

export const createFeedback = props => ({
  ...feedback,
  ...props
})
