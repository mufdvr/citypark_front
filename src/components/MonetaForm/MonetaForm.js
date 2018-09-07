import React from 'react'
import PropTypes from 'prop-types'
import FromStyles from './MonetaForm.css'
import { Spinner } from 'components'

class MonetaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      frameHeight: "670px"
    }
  }
   
  handleClick = () => {
    window.frames.widget.postMessage('{"m_type":"request","m_val":"submitForm"}', "*");
  }

  handleFrameLoad = () => {
    //window.frames.widget.postMessage('{"m_type":"request","m_val":"widgetSize"}', "*")
  }

  listener = event => {
    const msg = JSON.parse(event.data);
    this.setState({
      frameHeight: msg.height + "px"
    })
  }

  componentDidMount = () => {
    window.addEventListener ? window.addEventListener("message", this.listener)
    : window.attachEvent("onmessage", this.listener)
  }

  render = () => {
    //https://demo.moneta.ru/assistant.widget
    const { frameHeight } = this.state
    const { mntTransactionId, mntAmount, mntSignature, paymentType } = this.props
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    return (
      <iframe onLoad={this.handleFrameLoad} name="widget" id="widget" style={{width: "100%", height: frameHeight}} 
        src={"https://demo.moneta.ru/assistant.widget?" +
        "MNT_ID=" + REACT_APP_MNT_ID +
        "&MNT_TEST_MODE=" + REACT_APP_MNT_TEST_MODE +
        "&MNT_CURRENCY_CODE=" + REACT_APP_MNT_CURRENCY_CODE +
        "&MNT_TRANSACTION_ID=" + mntTransactionId +
        "&MNT_AMOUNT=" + mntAmount +
        "&MNT_SIGNATURE=" + mntSignature +
        "&paymentSystem.unitId=" + paymentType}
      >
        Ваш браузер не поддерживает плавающие фреймы!
      </iframe>
    )
  }
}

MonetaForm.propTypes = {
  mntTransactionId: PropTypes.any.isRequired,
  mntAmount: PropTypes.string.isRequired,
  mntSignature: PropTypes.string.isRequired,
  paymentType: PropTypes.string
}

export default MonetaForm