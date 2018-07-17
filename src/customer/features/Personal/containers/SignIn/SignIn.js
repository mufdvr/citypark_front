import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createUserSession } from '../../models'
import * as actions from '../../actions'
import * as apiConst from '../../apiConst'

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUserSession()
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        [name]: value
      }
    }))
  }

  handleSubmit = () => {
    const { user } = this.state
    const { signIn } = this.props
    signIn(user)
  }

  render = () => {
    return (
      <section id="sign-in-content">
        <div className="field">
          <label>E-mail</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            placeholder="e-mail"
            name="email"
          />
        </div>
        <div className="field">
          <label>Пароль</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="password"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <div id="auth-buttons">
          <div id="social-auth">
            <a href={apiConst.AUTH_FACEBOOK}><div id="facebook" className="icon" /></a>
            <a href={apiConst.AUTH_VK}><div id="vk" className="icon" /></a>
            <a href={apiConst.AUTH_ODNOKLASSNIKI}><div id="odnoklassniki" className="icon" /></a>
            <a href={apiConst.AUTH_TWITTER}><div id="twitter" className="icon" /></a>
          </div>
          <div className="z_btn" onClick={this.handleSubmit}>
            Войти
          </div>
        </div>  
      </section>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.personal.errors
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.user
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
