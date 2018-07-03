import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Auth extends React.Component {

  render = () => {
    return (
      <div>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <a href={process.env.REACT_APP_API_ROOT + "/users/auth/vkontakte"}>ВК</a>
      </div>
    )
  }
}

export default Auth
