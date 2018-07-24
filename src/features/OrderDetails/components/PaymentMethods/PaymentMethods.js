import React from 'react'
import PropTypes from 'prop-types'

import { PAYMENT_METHODS } from '../../constants'

const PaymentMethods = ({ onChange, value }) =>
  <div id="payment-methods">
    <label>
      <input
        type="radio"
        checked={value === PAYMENT_METHODS.visa}
        onChange={onChange}
        value={PAYMENT_METHODS.visa}
      />
      <div id="visa" className="payment-icons" />
    </label>
    <label>
      <input
        type="radio"
        checked={value === PAYMENT_METHODS.yandexmoney}
        onChange={onChange}
        value={PAYMENT_METHODS.yandexmoney}
      />
      <div id="yandexmoney" className="payment-icons" />
    </label>
    <label>
      <input
        type="radio"
        checked={value === PAYMENT_METHODS.webmoney}
        onChange={onChange}
        value={PAYMENT_METHODS.webmoney}
      />
      <div id="webmoney" className="payment-icons" />
    </label>
    <label>
      <input
        type="radio"
        checked={value === PAYMENT_METHODS.sberbank}
        onChange={onChange}
        value={PAYMENT_METHODS.sberbank}
      />
      <div id="sberbank" className="payment-icons" />
    </label>
    <label>
      <input
        type="radio"
        checked={value === PAYMENT_METHODS.vtb24}
        onChange={onChange}
        value={PAYMENT_METHODS.vtb24}
       />
       <div id="vtb24" className="payment-icons" />
    </label>
  </div>

PaymentMethods.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default PaymentMethods
