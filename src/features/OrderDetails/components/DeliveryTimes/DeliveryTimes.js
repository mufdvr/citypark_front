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
    const { deliveryTimes } = prop
    const { onChange } = this.props
    deliveryTimes && onChange({ delivery_times: deliveryTimes._d })
    this.setState({
      ...prop
    })
  }  

  render = () => {
    const { desiredTimes, deliveryTimes } = this.state
    return (
      <div className="group">
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
            <div className="field" style={{ flexBasis: "70%", marginLeft: "1rem" }}>
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
                moment().hours(4).minutes(30), moment().hours(5).minutes(0), moment().hours(5).minutes(30)]}
                minDate={moment()}
                maxDate={moment().add(5, "days")}
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