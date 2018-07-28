import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import * as constants from './constants'

class DeliveryAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      obtainingMethods: constants.OBTAINING_METHODS[0],
      settlements: constants.SETTLEMENTS[0]
    }
  }

  handleChange = prop => {
    const { target, settlements, obtainingMethods } = prop
    const { onChange } = this.props
    if (target) {
      onChange({ [target.name]: target.value })
    } else {
      settlements && onChange({ city: settlements.label })
      obtainingMethods && onChange({ delivery: obtainingMethods.value === 1 })
      this.setState({ ...prop })
    }
  }  

  render = () => {
    const { obtainingMethods, settlements } = this.state
    const { invalidFields } = this.props
    return (
      <div>
        <div className="field required">
          <label>Способ получения</label>
          <Select
            clearable={false}
            value={obtainingMethods}
            onChange={(obtainingMethods) => this.handleChange({ obtainingMethods })}
            options={constants.OBTAINING_METHODS}
          />
        </div>
        {
          obtainingMethods.value === 1 ?
            <div>
              <div className="group">
                <div className="field required" style={{ flexBasis: "70%" }}>
                  <label>Населенный пункт</label>
                  <Select
                    clearable={false}
                    value={settlements}
                    onChange={(settlements) => this.handleChange({ settlements })}
                    options={constants.SETTLEMENTS}
                  />
                </div>
                <div className={`field required${invalidFields.includes('street') ? ' error' : ''}`} style={{ marginLeft: "1rem" }}>
                  <label>Улица</label>
                  <input
                    onChange={this.handleChange}
                    className="form-input"
                    name="street"
                    type="text"
                    placeholder="Улица"
                  />
                </div>
              </div>
              <div className="group">
                <div className={`field required${invalidFields.includes('house') ? ' error' : ''}`}>
                  <label>Дом</label>
                  <input
                    onChange={this.handleChange}
                    className="form-input"
                    name="house"
                    type="text"
                    placeholder="Дом"
                  />
                </div>
                <div className="field" style={{ marginLeft: "1rem" }}>
                  <label>Корпус</label>
                  <input
                    onChange={this.handleChange}
                    className="form-input"
                    name="hull"
                    type="text"
                    placeholder="Корпус"
                  />
                </div>
                <div className="field" style={{ marginLeft: "1rem" }}>
                  <label>Квартира</label>
                  <input
                    onChange={this.handleChange}
                    className="form-input"
                    name="apartment"
                    type="text"
                    placeholder="Квартира"
                  />
                </div>
                <div className="field" style={{ marginLeft: "1rem" }}>
                  <label>Подъезд</label>
                  <input
                    onChange={this.handleChange}
                    className="form-input"
                    name="entrance"
                    type="text"
                    placeholder="Подъезд"
                  />
                </div>
              </div>
            </div>
          : 
            <div className="field required">
              <label>Адрес получения</label>
              <input
                disabled
                className="form-input"
                name="pickup"
                type="text"
                placeholder="г. Белореченск, ул. Гоголя, 61"
              />
            </div>
        }      
      </div>
    )
  }
}

DeliveryAddress.propTypes = {
  onChange: PropTypes.func.isRequired,
  invalidFields: PropTypes.arrayOf(PropTypes.string)
}

export default DeliveryAddress