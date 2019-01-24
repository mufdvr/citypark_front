import React from 'react'
import { Helmet } from 'react-helmet'
import Captcha from 'react-google-recaptcha'

import { Breadcrumbs, SpinButton } from 'components'
import { createFeedback, validFeedback } from '../../models'
import { TITLE_PREFIX } from 'appConstants'
import { FEEDBACK } from '../../links'
import * as api from '../../apiConst'

class Feedback extends React.Component {

  state = {
    feedback: createFeedback(),
    invalidFields: [],
    fetching: false,
    isOk: false
  }

  componentDidMount = () => window.scrollTo(0, 0)

  handleChange = ({ target: { name, value } }) => this.setState(prev => ({
    ...prev,
    feedback: {
      ...prev.feedback,
      [name]: value
    }
  }))

  handleSubmit = () => {
    const { feedback, g_recaptcha_response, fetching } = this.state
    const invalidFields = validFeedback(feedback)
    this.setState({ invalidFields })
    if (invalidFields.length) return
    const checkResponse = response =>
      new Promise((resolve, reject) => {
        response.ok ? response.json().then(json => resolve(json)) : reject()
      })
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feedback, g_recaptcha_response })
    }
    if (!fetching) {
      this.setState({ fetching: true })
      fetch(api.FEEDBACK, options)
        .then(response => checkResponse(response)
          .then(payload => {
            this.setState({
              fetching: false,
              isOk: payload.ok
            })
          })
        ).catch(() => {
          this.setState({ fetching: false })
        })
    }
  }

  render = () => {
    const { feedback: { name, subject, email, text }, fetching, invalidFields, isOk } = this.state
    const { REACT_APP_CAPTCHA_KEY } = process.env
    return (
      <div className="light">
        <Helmet title={TITLE_PREFIX} />
        {Breadcrumbs({ links: [FEEDBACK] })}
        {
          isOk ? <h1>Ваше сообщение принято!</h1> :
            <div id="feedback" className="form-layout">
              <div className={`field required${invalidFields.includes('name') ? ' error' : ''}`}>
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
              <div className={`field required${invalidFields.includes('email') ? ' error' : ''}`}>
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
              <div className={`field required${invalidFields.includes('subject') ? ' error' : ''}`}>
                <label>Тема</label>
                <input
                  onChange={this.handleChange}
                  className="form-input"
                  name="subject"
                  type="text"
                  value={subject}
                  placeholder="Тема"
                />
              </div>
              <div className={`field required${invalidFields.includes('text') ? ' error' : ''}`}>
                <label>Текст сообщения</label>
                <textarea
                  onChange={this.handleChange}
                  value={text}
                  rows="5"
                  name="text"
                  placeholder="Текст сообщения"
                />
              </div>
              <Captcha
                sitekey={REACT_APP_CAPTCHA_KEY}
                onChange={g_recaptcha_response => this.setState({ g_recaptcha_response })}
              />
              <div className="button-wrapper">
                <SpinButton spin={fetching} onClick={this.handleSubmit} className="z_btn">
                  Отправить
                </SpinButton>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Feedback
