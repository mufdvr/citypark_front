import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatePicker from 'react-datepicker'
//import { v4 } from 'react-native-uuid'
import moment from 'moment'
import 'moment/locale/ru'
import Select from 'react-select'
import Captcha from 'react-captcha'
import 'react-select/dist/react-select.css'

import 'react-datepicker/dist/react-datepicker.css'
import { createOrder } from '../../models'
import { filterCart } from 'utils'
import { deliveryAndTotalCost } from './utils'
import * as actions from '../../actions'
import * as constants from '../../constants'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
import { MonetaForm, PaymentMethods } from '../../components'


class OrderDetails extends React.Component {

  constructor(props) {
    super(props)
    const { cart } = props
    const dishes_orders_attributes = filterCart(cart)
    this.state = {
      order: createOrder({ dishes_orders_attributes }),
      paymentMethod: constants.PAYMENT_METHODS.visa,
      desiredTimes: constants.DESIRED_TIMES[0],
      settlements: constants.SETTLEMENTS[0],
      ...deliveryAndTotalCost(cart)
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

  handleChangeDesiredTimes = desiredTimes =>
    this.setState(prev => ({
      ...prev,
      desiredTimes
    }))

  handleChangeSettlements = settlements =>
    this.setState(prev => ({
      ...prev,
      settlements
    }))

  handlePaymentChange = event => {
    const { value } = event.target
    this.setState(prev => ({
      ...prev,
      paymentMethod: value
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
    //loadOrderFromLocalstorage
    const { cart, loadCartFromLocalstorage } = this.props
    !cart && loadCartFromLocalstorage()
  }

  componentWillReceiveProps = (nextProps) => {
    const { cart, order } = nextProps
    const dishes_orders_attributes = filterCart(cart)
    this.setState(prev => ({
      ...prev,
      order: createOrder({ dishes_orders_attributes }),
      ...deliveryAndTotalCost(cart)
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
    const { id } = this.state
    //localStorage.setItem("order", JSON.stringify(order))
    id && MonetaForm.send()
  }

  cartList = () => {
    const { cart } = this.props
    return cart ? cart.map((item, index) =>
      <div key={index}>
        {
          item.images ? <img src={process.env.REACT_APP_BACK_ROOT + item.images.preview} alt="pic" /> : null
        }
        <p>{item.title}</p>
        <p>{item.cost}</p>
      </div>
    ) : null
  }

  render = () => {
    const { id, amount, mnt_signature, paymentMethod, desiredTimes, settlements, freeDelivery, totalCost } = this.state
    const { cart } = this.props
    const { REACT_APP_DELIVERY_COST, REACT_APP_CAPTCHA_KEY } = process.env
    return (
     <div style={{position: "relative"}}>
       <div id="order">
       <div id="order-header">
         <div id="logo" className="order-logo"/>
         <h2>Оформление заказа</h2>
       </div>
       <div id="order-content">
         <div className="group">
           <div className="field required">
             <label>Желаемое время</label>
             <Select
               clearable={false}
               value={desiredTimes}
               onChange={this.handleChangeDesiredTimes}
               options={constants.DESIRED_TIMES}
             />
           </div>
           {
             desiredTimes.value === 2 ?
               <div className="field" style={{flexBasis: "70%", marginLeft: "1rem"}}>
                 <DatePicker
                    className="form-input"
                    placeholderText="Выберите время"
                    selected={this.state.order.delivery_times}
                    onChange={this.handleDateTimeChange}
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
         <div className="group">
           <div className="field required" style={{flexBasis: "42%"}}>
             <label>Населенный пункт</label>
             <Select
               clearable={false}
               value={settlements}
               onChange={this.handleChangeSettlements}
               options={constants.SETTLEMENTS}
             />
           </div>
           <div className="field required" style={{marginLeft: "1rem"}}>
             <label>Улица</label>
             <input
               onChange={this.handleChange}
               className="form-input"
               name="street"
               type="text"
             />
           </div>
         </div>
         <div className="group">
           <div className="field required">
             <label>Дом</label>
             <input
               onChange={this.handleChange}
               className="form-input"
               name="house"
               type="text"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Корпус</label>
             <input
               onChange={this.handleChange}
               className="form-input"
               name="hull"
               type="text"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Квартира</label>
             <input
               onChange={this.handleChange}
               className="form-input"
               name="apartment"
               type="text"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Подъезд</label>
             <input
               onChange={this.handleChange}
               className="form-input"
               name="entrance"
               type="text"
             />
           </div>
         </div>
         <div className="field required">
           <label>Имя</label>
           <input
             onChange={this.handleChange}
             className="form-input"
             name="name"
             type="text"
           />
         </div>
         <div className="field required">
           <label>Контактный телефон</label>
           <input
             onChange={this.handleChange}
             className="form-input"
             name="phone"
             type="tel"
            />
         </div>
         <div className="field">
           <label>Ваши пожелания</label>
           <textarea
              onChange={this.handleChange}
              rows="5"
              name="comment"
            />
         </div>
         {
           //<PaymentMethods onChange={this.handlePaymentChange} value={paymentMethod} />
           //<button onClick={this.handleSubmit}>tst</button>
         }
         <div id="total">
           <Captcha
              sitekey = {REACT_APP_CAPTCHA_KEY}
              lang = 'ru'
              theme = 'light'
              type = 'image'
              callback = {(value) => console.log(value)}
            />
           <div className="bl_cena">
             {
               freeDelivery ? null : <div>Стоимость доставки: {REACT_APP_DELIVERY_COST}₽</div>
             }
             <span style={{fontSize: "1.5em"}}>Итого: </span>
             <span className="bsm">
               <span className="bsm_n">{totalCost}</span><span style={{fontSize: "30px"}}>₽</span>
             </span>
           </div>
         </div>
       </div>
       <div id="submit">
          <div onClick={this.handleSubmit} className="z_btn">Отправить</div>
          <div onClick={this.handleSubmit} className="z_btn">Отмена</div>
       </div>
       <MonetaForm
         mntTransactionId={id}
         mntAmount={amount}
         mntSignature={mnt_signature}
         paymentType={paymentMethod}
       />
       </div>
       <div id="leaf-right" className="leaf leafs" />
       <div id="leaf-left" className="leaf leafs" />
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
