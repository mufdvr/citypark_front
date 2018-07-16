import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"

import { OrderDetails } from 'features'
import { cartTotal } from 'utils'
import { CartItem } from '../../components'
import * as actions from '../../actions'

const CART_STATES = [
  {left: '-500px'},
  {left: '-352px'},
  {left: '10px'}
]

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartState: props.cart && props.cart.length ? 1 : 0
    }
  }

  handleClick = () =>
    this.setState({
      cartState: this.state.cartState ^ 0b11
    })

  listItems = () => {
    const { cart, changeCount, deleteItem } = this.props
    return cart ? cart.map(item =>
      <CartItem
        key={item.id}
        deleteItem={deleteItem}
        changeCount={changeCount}
        {...item}
      />
    ) : null
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

  componentDidMount = () => this.props.loadCartFromLocalstorage()

  render = () => {
    const { cartState } = this.state
    const { cart, clearCart, history, location: { pathname } } = this.props
    const _cartTotal = cartTotal(cart)
    const { REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY } = process.env
    return (
      <div className="shopping" style={CART_STATES[cartState]}>
        <div className="t_list">
          {this.listItems()}
        </div>
        <div className="basket_summ">
          {
            _cartTotal >= Number(REACT_APP_MIN_AMOUNT_TO_FREE_DELIVERY) ?
              <div id="free_dost">Бесплатная доставка!</div>
            : null
          }
          Сумма заказа: <span id="t_all_summ">{_cartTotal}</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>
        {
          pathname !== OrderDetails.links.ORDER_DETAILS ?
            <div className="zakaz_info" style={{display: "flex"}}>
              <div
                onClick={clearCart}
                className="z_btn create-order-btn cancel-btn"
              >
                Отмена<i style={{color: "red"}} className="material-icons">close</i>
            </div>
              <div
                onClick={() => history.push(OrderDetails.links.ORDER_DETAILS)}
                className="z_btn create-order-btn create-btn"
              >
                Оформить заказ<i style={{color: "green"}} className="material-icons">done</i>
              </div>
            </div>
          : null
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))
