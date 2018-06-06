import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"

import OrderDetails from 'features/OrderDetails'
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
      cartState: props.cart ? 1 : 0
    }
    this.totalCost = 0
  }

  handleClick = () =>
    this.setState({
      cartState: this.state.cartState ^ 0b11
    })

  handleOrderDetails = () =>
    this.props.history.push(OrderDetails.links.ORDER_DETAILS)

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
    else if (!cart.length) this.setState({
      cartState: 0
    })
    if (cart) {
      this.totalCost = 0
      cart.forEach(item => this.totalCost += item.cost * item.count)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  componentDidMount = () => this.props.loadCartFromLocalstorage()

  render = () => {
    const { cartState } = this.state
    return (
      <div className="shopping" style={CART_STATES[cartState]}>
        <div className="t_list">
          {this.listItems()}
        </div>

        <div className="basket_summ">
          {
            this.totalCost >= 500 ?
              <div id="free_dost">Бесплатная доставка!</div>
            : null
          }
          Сумма заказа: <span id="t_all_summ">{this.totalCost}</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>

        <div className="zakaz_info">
          <div onClick={this.handleOrderDetails} className="z_btn create-order-btn">Оформить заказ</div>
        </div>

        <div id="s_open_btn" onClick={this.handleClick}>
          <div></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.restcafe.payload.cart
})

const mapDispatchToProps = dispath => bindActionCreators({
  ...actions.cart
}, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))
