import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import { PAYMENT_TYPES } from './constants'

class PaymentType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payment_type: PAYMENT_TYPES[1],
      surrender_from: ''
    }
  }

  handleChange = prop => {
    const { onChange } = this.props
    const { target } = prop
    this.setState({ 
      ...(() => target ? { [target.name]: target.value } : prop)()
    })
    onChange({...(() => target ? { [target.name]: target.value } : { payment_type: prop.payment_type.value } )()})
  }

  render = () => {
    const { payment_type, surrender_from } = this.state
    const { delivery } = this.props
    return(
      <div className="group">
        <div className="field required">
          <label>Способ Оплаты</label>
          <Select
            clearable={false}
            value={payment_type}
            onChange={(payment_type) => this.handleChange({ payment_type })}
            options={PAYMENT_TYPES}
          />
        </div>
        {
          payment_type.value === PAYMENT_TYPES[0].value && delivery ?
            <div className="field" style={{ marginLeft: "1rem" }}>
              <label>Сдача с</label>
              <input
                onChange={this.handleChange}
                className="form-input"
                name="surrender_from"
                type="number"
                min="0"
                value={surrender_from}
                placeholder="Сдача с"
              />
            </div>
          : null
        }
      </div>  
    )
  }
}

PaymentType.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default PaymentType
