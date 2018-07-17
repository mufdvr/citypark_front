import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getUser = () =>
  feedback.get(
    apiConst.PROFILE,
    types.USER_SHOW
  )

export const updateUser = user =>
  feedback.patch(
    apiConst.USERS,
    types.USER_UPDATE,
    { user }
  )

export const signIn = user =>
  feedback.post(
    apiConst.SIGN_IN,
    types.USER_CREATE_SESSION,
    { user }
  )

export const signUp = (user, g_recaptcha_response) =>
  feedback.post(
    apiConst.USERS,
    types.USER_CREATE,
    {
      user,
      g_recaptcha_response,
    }
  )

export const signOut = () =>
  feedback.destroy(
    apiConst.SIGN_OUT,
    types.USER_DESTROY
  )
