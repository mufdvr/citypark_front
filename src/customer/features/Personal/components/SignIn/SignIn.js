import React from 'react'
import PropTypes from 'prop-types'

import { SpinButton } from 'components'
import { createUser } from '../../models'

class SignInLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUser()
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
    const { signIn } = this.props.stack
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
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Пароль"
            name="password"
          />
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

export default SignInLayout
