import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { CartItem } from '../../components'

const CART_STATES = [
  {left: '-1000px'},
  {left: '-352px'},
  {left: '10px'}
]

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartState: 0
    }
  }

  handleClick = () =>
    this.setState({
      cartState: this.state.cartState ^ 0b11
    })

  listItems = () => {
    const { cart } = this.props
    return cart ? Object.keys(cart).map(item =>
      <CartItem key={item} {...cart[item]} />
    ) : null
  }

  componentWillReceiveProps = nextProps => {
    if (!this.props.cart && nextProps.cart) this.setState ({
      cartState: 1
    })
  }

  render = () => {
    const { cartState } = this.state
    return (
      <div className="shopping" style={CART_STATES[cartState]}>
        <div className="t_list">
          {this.listItems()}
        </div>

        <div className="basket_summ">
          <div id="free_dost">Бесплатная доставка!</div>
          Сумма заказа: <span id="t_all_summ">540</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>

        <div className="zakaz_info">
          <div style={{fontSize: "24px", lineHeight: "24px"}}>8-918-311-97-91</div>
          Пожалуйста, позвоните по этому номеру и продиктуйте ваш заказ.
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

export default connect(mapStateToProps)(Cart)
