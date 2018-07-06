import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createUserRegistration } from '../../models'
import * as actions from '../../actions'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUserRegistration()
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
    const { signUp } = this.props
    signUp(user)
  }

  render = () => {
    return (
      <section id="sign-up-content">
        <div className="field required">
          <label>Имя</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Имя"
            name="name"
          />
        </div>
        <div className="field required">
          <label>Email</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            placeholder="e-mail"
            name="email"
          />
        </div>
        <div className="field required">
          <label>Пароль</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="password"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <div className="field required">
          <label>Повторите пароль</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="password"
            placeholder="Пароль"
            name="password_confirmation"
          />
        </div>
          <button
            className="btn"
            onClick={this.handleSubmit}
          >
            Войти
        </button>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.user.errors
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.auth
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
