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

  componentWillReceiveProps = (nextProps) => {
    const { id, amount, mnt_signature } = nextProps.order
    this.setState(prev => ({
      ...prev,
      id,
      amount,
      mnt_signature
    }))
  }

  componentDidUpdate = () => this.state.id && MonetaForm.send()

  render = () => {
    const { id, amount, mnt_signature } = this.state
    return (
     <div id="order-details">
       <div id="order-left-side">
       <h2>Информация о покупателе</h2>
       <div className="form-group">
         <div className="form-label">Ваше имя</div>
         <input
           onChange={this.handleChange}
           className="form-input"
           name="name"
           type="text"
         />
       </div>
       <div className="form-group">
         <div className="form-label">Контактный телефон</div>
         <input
           onChange={this.handleChange}
           className="form-input"
           name="phone"
           type="tel"
          />
       </div>
       <div className="form-group">
         <div className="form-label">Город</div>
         <input
           onChange={this.handleChange}
           className="form-input"
           name="city"
           type="text"
           value={this.state.order.city}
          />
       </div>
        <input onChange={this.handleChange} name="house" type="text" placeholder="house" /><br/>
       <input onChange={this.handleChange} name="apartment" type="text" placeholder="apartment" /><br/>
       <input onChange={this.handleChange} name="comment" type="text" placeholder="comment" /><br/>
       <button onClick={this.handleSubmit}>tst</button>
     </div>
     <div id="order-right-side">
     </div>
       <MonetaForm
         mntTransactionId={id}
         mntAmount={amount}
         mntSignature={mnt_signature}
        />
     </div>
   )
 }
}

const mapStateToProps = state => ({
  cart: state.restcafe.payload.cart,
  order: state.order.payload.order
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.order
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
