//import { v4 } from 'react-native-uuid'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { withRouter } from "react-router-dom"
import Select from 'react-select'
import Captcha from 'react-google-recaptcha'
import PhoneInput from 'react-phone-number-input/native'
import 'react-phone-number-input/style.css'
import 'react-select/dist/react-select.css'
import 'moment/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'

import { createOrder, validOrder } from '../../models'
import { filterCart } from 'utils'
import { deliveryAndTotalCost } from './utils'
import * as actions from '../../actions'
import * as constants from '../../constants'
import { RestaurantAndCafe, Cart } from 'features'
import { MonetaForm } from '../../components'


class OrderDetails extends React.Component {

  constructor(props) {
    super(props)
    const { cart } = props
    const dishes_orders_attributes = filterCart(cart)
    this.state = {
      order: createOrder({ dishes_orders_attributes }),
      invalidFields: [],
      desiredTimes: constants.DESIRED_TIMES[0],
      settlements: constants.SETTLEMENTS[0],
      ...deliveryAndTotalCost(cart)
    }
  }

  handleChangeOrder = prop => {
    const { target } = prop
    this.setState(prev => ({
      ...prev,
      order: {
        ...prev.order,
        ...(() => target ? {[target.name]: target.value} : prop)()
      }
    }))
  }

  handleChange = prop =>
    this.setState(prev => ({
      ...prev,
      ...prop
    }))

  handleSubmit = () => {
    const { order, g_recaptcha_response, delivery_times, settlements } = this.state
    const { createOrder } = this.props
    order.city = settlements.label
    const invalidFields = validOrder(order)
    this.setState(prev => ({
      ...prev,
      invalidFields
    }))
    //console.log(delivery_times);
    if (delivery_times) order.delivery_times = delivery_times._d
    !invalidFields.length && g_recaptcha_response && createOrder(order, g_recaptcha_response)
  }

  componentDidMount = () => {
    //loadOrderFromLocalstorage
    window.scrollTo(0, 0)
    const { cart, loadCartFromLocalstorage } = this.props
    !cart && loadCartFromLocalstorage()
  }

  componentWillReceiveProps = (nextProps) => {
    const { cart, order, history } = nextProps
    !cart.length && history.push(RestaurantAndCafe.links.MENU.url)
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
    const { id, amount, mnt_signature, desiredTimes, settlements, freeDelivery, totalCost, invalidFields } = this.state
    const { clearCart } = this.props
    const { REACT_APP_DELIVERY_COST, REACT_APP_CAPTCHA_KEY } = process.env
    return (
     <div style={{position: "relative"}}>
       <div id="order" className="form-layout">
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
               onChange={(desiredTimes) => this.handleChange({desiredTimes})}
               options={constants.DESIRED_TIMES}
             />
           </div>
           {
             desiredTimes.value === 2 ?
               <div className="field" style={{flexBasis: "70%", marginLeft: "1rem"}}>
                 <DatePicker
                    className="form-input"
                    placeholderText="Выберите время"
                    utcOffset={3}
                    selected={this.state.delivery_times}
                    onChange={(delivery_times) => this.handleChange({delivery_times})}
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
               onChange={(settlements) => this.handleChange({settlements})}
               options={constants.SETTLEMENTS}
             />
           </div>
           <div className={`field required${ invalidFields.includes('street') ? ' error' : '' }`} style={{marginLeft: "1rem"}}>
             <label>Улица</label>
             <input
               onChange={this.handleChangeOrder}
               className="form-input"
               name="street"
               type="text"
               placeholder="Улица"
             />
           </div>
         </div>
         <div className="group">
           <div className={`field required${ invalidFields.includes('house') ? ' error' : '' }`}>
             <label>Дом</label>
             <input
               onChange={this.handleChangeOrder}
               className="form-input"
               name="house"
               type="text"
               placeholder="Дом"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Корпус</label>
             <input
               onChange={this.handleChangeOrder}
               className="form-input"
               name="hull"
               type="text"
               placeholder="Корпус"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Квартира</label>
             <input
               onChange={this.handleChangeOrder}
               className="form-input"
               name="apartment"
               type="text"
               placeholder="Квартира"
             />
           </div>
           <div className="field" style={{marginLeft: "1rem"}}>
             <label>Подъезд</label>
             <input
               onChange={this.handleChangeOrder}
               className="form-input"
               name="entrance"
               type="text"
               placeholder="Подъезд"
             />
           </div>
         </div>
         <div className={`field required${ invalidFields.includes('name') ? ' error' : '' }`}>
           <label>Имя</label>
           <input
             onChange={this.handleChangeOrder}
             className="form-input"
             name="name"
             type="text"
             placeholder="Имя"
           />
         </div>
         <div className={`field required${ invalidFields.includes('phone') ? ' error' : '' }`}>
           <label>Контактный телефон</label>
           <PhoneInput
             onChange={ phone => this.handleChangeOrder({ phone })}
             countries={['RU']}
             className="form-input"
             displayInitialValueAsLocalNumber={false}
             indicateInvalid={true}
             value={this.state.order.phone}
             placeholder="Контактный телефон"
            />
         </div>
         <div className="field">
           <label>Ваши пожелания</label>
           <textarea
              onChange={this.handleChangeOrder}
              rows="5"
              name="comment"
              placeholder="Впишите Ваши пожелания"
            />
         </div>
         <div id="total">
           <Captcha
              sitekey = {REACT_APP_CAPTCHA_KEY}
              onChange = {g_recaptcha_response => this.handleChange({ g_recaptcha_response })}
            />
           <div className="bl_cena">
             {
               freeDelivery ? <div>&nbsp;</div> : <div>Стоимость доставки: {REACT_APP_DELIVERY_COST}₽</div>
             }
             <span style={{fontSize: "1.5em"}}>Итого: </span>
             <span className="bsm">
               <span className="bsm_n">{totalCost}</span><span style={{fontSize: "30px"}}>₽</span>
             </span>
           </div>
         </div>
       </div>
       <div id="submit">
          <div onClick={this.handleSubmit} className="z_btn order-btn">Отправить<i style={{color: "green"}} className="material-icons">done</i></div>
          <div
            onClick={clearCart}
            className="z_btn order-btn"
          >
           Отмена
           <i style={{color: "red"}} className="material-icons">close</i>
          </div>
       </div>
       </div>
       <div id="leaf-right" className="leaf leafs" />
       <div id="leaf-left" className="leaf leafs" />
       <Cart.containers.Cart />
       <MonetaForm
         mntTransactionId={id}
         mntAmount={amount}
         mntSignature={mnt_signature}
         paymentType="43674"
       />
     </div>
   )
 }
}

const mapStateToProps = state => ({
  cart: state.cart.payload,
  order: state.order.payload.order
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
  ...Cart.actions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderDetails))
