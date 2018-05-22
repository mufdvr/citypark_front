import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetch from 'isomorphic-fetch'

import { createOrder } from '../../models'

class OrderDetails extends React.Component {
  constructor(props) => {
    super(props)
    this.state = {
      order: createOrder()
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState(prev => ({
      ...prev,
      order: {
        ...prev.order,
        [name]: value
      }
    }))
  }

  handleSubmit = () => {

  }

  handleClick = () => {
    let tst = document.getElementById("snd")
    tst.click()
  }

  render = () => {
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    return (
     <div id="order-details">
       <input onChange={this.handleChange} name="name" type="text" placeholder="name" /><br/>
       <input onChange={this.handleChange} name="phone" type="text" placeholder="phone" /><br/>
       <input onChange={this.handleChange} name="city" type="text" placeholder="city" value={this.staet.order.city} /><br/>
       <input onChange={this.handleChange} name="house" type="text" placeholder="house" /><br/>
       <input onChange={this.handleChange} name="apartment" type="text" placeholder="apartment" /><br/>
       <input onChange={this.handleChange} name="comment" type="text" placeholder="comment" /><br/>

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

const mapStateToProps = state => {
  cart: state.restcafe.payload.cart
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.order
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
