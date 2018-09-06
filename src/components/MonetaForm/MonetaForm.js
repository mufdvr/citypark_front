import React from 'react'
import PropTypes from 'prop-types'
import FromStyles from './MonetaForm.css'
import { Spinner } from 'components'

class MonetaForm extends React.Component {

  addLink = target => {
    let cssLink = document.createElement("link")
    cssLink.href = FromStyles
    cssLink.rel = "stylesheet"
    cssLink.type = "text/css"
    target.contentDocument.head.appendChild(cssLink)
  }

  render = () => {
    //https://demo.moneta.ru/assistant.widget
    const { mntTransactionId, mntAmount, mntSignature, paymentType } = this.props
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    return (
      <iframe ref={this.addLink} onLoad={() => console.log(77777777)} id="widget" style={{width: "100%", height: "700px"}} 
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