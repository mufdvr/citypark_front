const { REACT_APP_API_PLACEHOLDER, REACT_APP_API_GATEWAY }         = process.env
export const SIGN_IN                 = REACT_APP_API_PLACEHOLDER + '/users/sign_in'
export const USERS                   = REACT_APP_API_PLACEHOLDER + '/users'
export const SIGN_OUT                = REACT_APP_API_PLACEHOLDER + '/users/sign_out'
export const PROFILE                 = REACT_APP_API_PLACEHOLDER + '/profile'
export const FAVORITES               = REACT_APP_API_PLACEHOLDER + '/favorites/'
export const ORDERS                  = REACT_APP_API_PLACEHOLDER + '/orders'

export const AUTH_VK                 = USERS + '/auth/vkontakte'
export const AUTH_ODNOKLASSNIKI      = USERS + '/auth/odnoklassniki'
