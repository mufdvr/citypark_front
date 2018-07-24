import React from 'react'

export default class MonetaForm extends React.Component {

  static send() {
    const submit = document.getElementById('moneta-submit')
    submit.click()
  }

  render = () => {
    const { mntTransactionId, mntAmount, mntSignature, paymentType } = this.props
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    return (
      <form method="post" action={REACT_APP_ASSISTANT}>
        <input type="hidden" name="MNT_ID" value={REACT_APP_MNT_ID} />
        <input type="hidden" name="MNT_TEST_MODE" value={REACT_APP_MNT_TEST_MODE} />
        <input type="hidden" name="MNT_CURRENCY_CODE" value={REACT_APP_MNT_CURRENCY_CODE} />
        <input type="hidden" name="MNT_TRANSACTION_ID" value={mntTransactionId} />
        <input type="hidden" name="MNT_AMOUNT" value={mntAmount} />
        <input type="hidden" name="MNT_SIGNATURE" value={mntSignature} />
        <input type="hidden" name="paymentSystem.unitId" value={paymentType} />
        <input id="moneta-submit" type="submit" style={{display: 'none'}} />
      </form>
    )
  }
}
