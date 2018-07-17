import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PhoneInput from 'react-phone-number-input/native'
import 'react-phone-number-input/style.css'

import { Breadcrumbs } from 'components'
import * as links from '../../links'
import * as actions from '../../actions'
import { createUserData } from '../../models'

class MyData extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUserData(props.user)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { user } = nextProps
    user && this.setState({
      user: createUserData(user)
    })
  }

  handleChange = prop => {
    const { target } = prop
    this.setState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        ...(() => target ? {[target.name]: target.value} : prop)()
      }
    }))
  }

  handleSubmit = () => {
    const { user } = this.state
    const { updateUser } = this.props
    updateUser(user)
  }

  render = () => {
    const { name, email, phone } = this.state.user
    return (
      <div className="light">
        <Breadcrumbs links={[ links.PERSONAL ]} />
        <div id="my-data" className="form-layout">
          <div className="field">
            <label>Имя</label>
            <input
              onChange={this.handleChange}
              className="form-input"
              name="name"
              type="text"
              value={name}
              placeholder="Имя"
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              onChange={this.handleChange}
              className="form-input"
              name="email"
              type="text"
              value={email}
              placeholder="E-Mail"
            />
          </div>
          <div className="field">
            <label>Телефон</label>
            <PhoneInput
              onChange={phone => this.handleChange({ phone })}
              countries={['RU']}
              className="form-input"
              displayInitialValueAsLocalNumber={false}
              indicateInvalid={true}
              value={phone}
              placeholder="Телефон"
             />
          </div>
          <div className="field">
            <label>Смена пароля</label>
            <input
              onChange={this.handleChange}
              className="form-input"
              name="password"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <div className="field">
            <label>Подтверждение</label>
            <input
              onChange={this.handleChange}
              className="form-input"
              name="password_confirmation"
              type="password"
              placeholder="Подтверждение"
            />
          </div>
          <button onClick={this.handleSubmit}>Сохранить</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.personal.payload.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateUser: actions.user.updateUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyData)
