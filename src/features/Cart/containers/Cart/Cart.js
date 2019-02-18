import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"

import { OrderDetails } from 'features'
import { cartTotal } from 'utils'
import { CartItem } from '../../components'
import * as actions from '../../actions'
import { CART_STATES, MOBILE_VIEW_OFFSET_STATES } from './constants'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartState: props.cart && props.cart.length ? 1 : 0
    }
  }

  handleClick = () =>
    this.setState(prev => ({
      ...prev,
      cartState: prev.cartState ^ 0b11
    }))

  listItems = () => {
    const { cart, changeCount, deleteItem } = this.props
    return cart.map(item =>
      <CartItem
        key={item.id}
        deleteItem={deleteItem}
        changeCount={changeCount}
        {...item}
      />
    )
  }

  componentWillReceiveProps = nextProps => {
    const { cart } = nextProps
    if ((!this.props.cart || !this.props.cart.length) && cart && cart.length) this.setState ({
      cartState: 1
    })
    else if (!cart || !cart.length) this.setState({
      cartState: 0
    })
    cart && localStorage.setItem("cart", JSON.stringify(cart))
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions)
    this.props.loadCartFromLocalstorage()
  }  

  componentDidUpdate = () => {
    const { cartState, mobileViewOffsetStates } = this.state
    if (cartState + mobileViewOffsetStates === 4) this.refs.shopping.style = `top: ${-this.refs.shopping.offsetHeight}px`
  }

  updateDimensions = () => {
    this.setState({
      mobileViewOffsetStates: window.innerWidth < 1024 ? MOBILE_VIEW_OFFSET_STATES : 0
    })
  }

  componentWillMount = () => {
    this.updateDimensions()
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions)
    //window.removeEventListener("orientationchange", this.updateDimensions)
  }

  render = () => {
    const { cartState, mobileViewOffsetStates } = this.state
    const { cart, clearCart, history, location: { pathname } } = this.props
    const _cartTotal = cartTotal(cart)
    const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY, REACT_APP_SHOPON } = process.env
    return (
      <div ref="shopping" className="shopping" style={CART_STATES[cartState + mobileViewOffsetStates]}>
        <div className="t_list">
          {this.listItems()}
        </div>
        <div className="basket_summ">
          {
            _cartTotal >= Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY) ?
              <div id="free_dost">Бесплатная доставка по городу!</div>
            : null
          }
          Сумма заказа: <span id="t_all_summ">{_cartTotal}</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>
        {
          REACT_APP_SHOPON === "true" ? 
            pathname !== OrderDetails.links.ORDER_DETAILS.URL ?
              <div className="zakaz_info" style={{display: "flex"}}>
                <div
                  onClick={clearCart}
                  className="z_btn create-order-btn cancel-btn"
                >
                  Отмена<i style={{color: "red"}} className="material-icons">close</i>
                </div>
                <div
                  onClick={() => history.push(OrderDetails.links.ORDER_DETAILS.URL)}
                  className="z_btn create-order-btn create-btn"
                >
                  Оформить заказ<i style={{color: "green"}} className="material-icons">done</i>
                </div>
              </div>
            : null
          :
            <div className="zakaz_info">
              <div style={{fontSize: "24px", lineHeight: "24px"}}><a className="contacts" href="tel:+79183119791">8-918-311-97-91</a></div>
              Пожалуйста, позвоните по этому номеру и продиктуйте ваш заказ.
            </div> 
        }
        <div id="s_open_btn" onClick={this.handleClick}>
          <div></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.payload
})

const mapDispatchToProps = dispath => bindActionCreators({
  ...actions
}, dispath)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(withRouter(Cart))
export default WrappedComponent
