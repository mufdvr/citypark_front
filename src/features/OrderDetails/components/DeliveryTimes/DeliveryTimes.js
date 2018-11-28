import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import 'moment/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'

import { DESIRED_TIMES } from './constants'

class DeliveryTimes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      desiredTimes: DESIRED_TIMES[0]
    }
  }

  handleChange = prop => {
    const { deliveryTimes, desiredTimes } = prop
    const { onChange } = this.props
    deliveryTimes && onChange(deliveryTimes._d)
    desiredTimes && desiredTimes.value === 1 && onChange(null)
    this.setState({
      ...prop
    })
  }  

  render = () => {
    const { desiredTimes, deliveryTimes } = this.state
    return (
      <div>
        <div className="field required">
          <label>Желаемое время</label>
          <Select
            clearable={false}
            value={desiredTimes}
            onChange={desiredTimes => this.handleChange({ desiredTimes })}
            options={DESIRED_TIMES}
          />
        </div>
        {
          desiredTimes.value === 2 ?
            <div className="field">
              <DatePicker
                className="form-input"
                placeholderText="Выберите время"
                utcOffset={3}
                selected={deliveryTimes}
                onChange={deliveryTimes => this.handleChange({ deliveryTimes })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="LLL"
                timeCaption="время"
                locale="ru"
                excludeTimes={[moment().hours(1).minutes(30), moment().hours(2).minutes(0), moment().hours(2).minutes(30),
                moment().hours(3).minutes(0), moment().hours(3).minutes(30), moment().hours(4).minutes(0),
                moment().hours(4).minutes(30), moment().hours(5).minutes(0), moment().hours(5).minutes(30),
                moment().hours(6).minutes(0), moment().hours(6).minutes(30), moment().hours(7).minutes(0),
                moment().hours(7).minutes(30), moment().hours(8).minutes(0), moment().hours(8).minutes(30),
                moment().hours(9).minutes(0), moment().hours(9).minutes(30) ]}
                minDate={moment()}
                maxDate={moment().add(3, "days")}
              />
            </div>
          : null
        }
      </div>
    )
  }
}

DeliveryTimes.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default DeliveryTimes