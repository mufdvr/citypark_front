import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createOrder } from '../../models'
import { filterCart } from 'utils'
import * as actions from '../../actions'
import { MonetaForm } from '../../components'

class OrderDetails extends React.Component {

  constructor(props) {
    super(props)
    const dishes_orders_attributes = filterCart(this.props.cart)
    this.state = {
      order: createOrder({ dishes_orders_attributes })
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
    const { order } = this.state
    const { createOrder } = this.props
    createOrder(order)
  }

  handleClick = () => {
    MonetaForm.send()
  }

  render = () => {
    return (
     <div id="order-details">
       <input onChange={this.handleChange} name="name" type="text" placeholder="name" /><br/>
       <input onChange={this.handleChange} name="phone" type="text" placeholder="phone" /><br/>
       <input onChange={this.handleChange} name="city" type="text" placeholder="city" value={this.state.order.city} /><br/>
       <input onChange={this.handleChange} name="house" type="text" placeholder="house" /><br/>
       <input onChange={this.handleChange} name="apartment" type="text" placeholder="apartment" /><br/>
       <input onChange={this.handleChange} name="comment" type="text" placeholder="comment" /><br/>
       <button onClick={this.handleClick}>tst</button>
       <MonetaForm />
     </div>
   )
 }
}

const mapStateToProps = state => ({
  cart: state.restcafe.payload.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.order
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
