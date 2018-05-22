import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetch from 'isomorphic-fetch'

class OrderDetails extends React.Component {

  handleClick = () => {
    let tst = document.getElementById("snd")
    tst.click()
  }

  render = () => {
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    return (
     <div id="order-details">
       <input type="text" placeholder="phone" /><br/>
       <input type="text" placeholder="name" /><br/>
       <form method="post" action={REACT_APP_ASSISTANT}>
         <input type="hidden" name="MNT_ID" value={REACT_APP_MNT_ID} />
         <input type="hidden" name="MNT_TEST_MODE" value={REACT_APP_MNT_TEST_MODE} />
         <input type="hidden" name="MNT_CURRENCY_CODE" value={REACT_APP_MNT_CURRENCY_CODE} />
         <input type="hidden" name="MNT_TRANSACTION_ID" value="2" />
         <input type="hidden" name="MNT_AMOUNT" value="10" />
         <input id="snd" type="submit" value="Pay order" />
       </form>
       <button onClick={this.handleClick}>tst</button>
     </div>
   )
 }
}

export default OrderDetails
