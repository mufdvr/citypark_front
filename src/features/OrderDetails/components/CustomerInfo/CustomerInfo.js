import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input/native'
import 'react-phone-number-input/style.css'

const CustomerInfo = ({ order: { name, phone }, onChange, invalidFields }) => {
  return (
    <div>
      <div className={`field required${invalidFields.includes('name') ? ' error' : ''}`}>
        <label>Имя</label>
        <input
          onChange={onChange}
          className="form-input"
          name="name"
          type="text"
          value={name}
          placeholder="Имя"
        />
      </div>
      <div className={`field required${invalidFields.includes('phone') ? ' error' : ''}`}>
        <label>Контактный телефон</label>
        <PhoneInput
          onChange={phone => onChange({ phone })}
          countries={['RU']}
          className="form-input"
          displayInitialValueAsLocalNumber={false}
          indicateInvalid={true}
          value={phone}
          placeholder="Контактный телефон"
        />
      </div>
      <div className="field">
        <label>Ваши пожелания</label>
        <textarea
          onChange={onChange}
          rows="5"
          name="comment"
          placeholder="Впишите Ваши пожелания"
        />
      </div>
    </div>
  )
}

CustomerInfo.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  }),
  invalidFields: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired
}

export default CustomerInfo