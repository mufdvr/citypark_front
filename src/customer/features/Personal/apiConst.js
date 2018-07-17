const { REACT_APP_API_ROOT }         = process.env
export const SIGN_IN                 = REACT_APP_API_ROOT + '/users/sign_in'
export const USERS                   = REACT_APP_API_ROOT + '/users'
export const SIGN_OUT                = REACT_APP_API_ROOT + '/users/sign_out'
export const PROFILE                 = REACT_APP_API_ROOT + '/profile'
export const FAVORITES               = REACT_APP_API_ROOT + '/favorites/'
export const ORDERS                  = REACT_APP_API_ROOT + '/orders'

export const AUTH_VK                 = USERS + '/auth/vkontakte'
export const AUTH_FACEBOOK           = USERS + '/auth/facebook'
export const AUTH_ODNOKLASSNIKI      = USERS + '/auth/odnoklassniki'
export const AUTH_TWITTER            = USERS + '/auth/twitter'
