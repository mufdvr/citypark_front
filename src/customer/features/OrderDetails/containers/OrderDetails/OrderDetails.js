import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatePicker from 'react-datepicker'
//import { v4 } from 'react-native-uuid'
import moment from 'moment'
import 'moment/locale/ru'

import 'react-datepicker/dist/react-datepicker.css'
import { createOrder } from '../../models'
import { filterCart } from 'utils'
import * as actions from '../../actions'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
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

  handleDateTimeChange = datetime =>
    this.setState(prev => ({
      ...prev,
      order: {
        ...prev.order,
        delivery_times: datetime
      }
    }))

  handleSubmit = () => {
    const { order } = this.state
    const { createOrder } = this.props
    createOrder(order)
  }

  componentDidMount = () => {
    const { cart, loadOrderFromLocalstorage, loadCartFromLocalstorage } = this.props
    !cart && loadCartFromLocalstorage()
  }

  componentWillReceiveProps = (nextProps) => {
    const { cart, order } = nextProps
    const dishes_orders_attributes = filterCart(cart)
    this.setState(prev => ({
      ...prev,
      order: createOrder({ dishes_orders_attributes })
    }))
    if (!order) return
    const { id, amount, mnt_signature } = order
    this.setState(prev => ({
      ...prev,
      id,
      amount,
      mnt_signature,
    }))
  }

  componentDidUpdate = () => {
    const { order, id } = this.state
    //localStorage.setItem("order", JSON.stringify(order))
    id && MonetaForm.send()
  }

  cartList = () => {
    const { cart } = this.props
    return cart ? cart.map((item, index) =>
      <div key={index}>
        <img src={process.env.REACT_APP_BACK_ROOT + item.images.preview} alt="pic" />
        <p>{item.title}</p>
        <p>{item.cost}</p>
      </div>
    ) : null
  }

  render = () => {
    const { id, amount, mnt_signature } = this.state
    const { name, phone } = this.state.order
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
           value={name}
         />
       </div>
       <div className="form-group">
         <div className="form-label">Контактный телефон</div>
         <input
           onChange={this.handleChange}
           className="form-input"
           name="phone"
           type="tel"
           value={phone}
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
       <input onChange={this.handleChange} name="street" type="text" placeholder="street" /><br/>
       <input onChange={this.handleChange} name="house" type="text" placeholder="house" /><br/>
       <input onChange={this.handleChange} name="apartment" type="text" placeholder="apartment" /><br/>
       <div className="form-group">
         <DatePicker
            selected={this.state.order.delivery_times}
            onChange={this.handleDateTimeChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="время"
            locale="ru"
            minDate={moment()}
            maxDate={moment().add(5, "days")}
         />
       </div>
       <input onChange={this.handleChange} name="comment" type="text" placeholder="comment" /><br/>
       <button onClick={this.handleSubmit}>tst</button>
     </div>
     <div id="order-right-side">
       { this.cartList() }
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

const mapDispatchToProps = dispatch => {
  const { loadCartFromLocalstorage } = RestaurantAndCafe.actions.cart
  return bindActionCreators({
    ...actions.order,
    loadCartFromLocalstorage,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
