import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import { TITLE_PREFIX } from 'appConstants.js'
import { ACCEPTED } from '../../links'
import { withRouter } from 'react-router-dom'
import { Cart, Personal, RestaurantAndCafe } from 'features'

class Accepted extends React.Component {

  handleClick = () => {
    const { history, user } = this.props
    const { ORDERS } = Personal.links
    const { MENU } = RestaurantAndCafe.links
    user.id ? history.push(ORDERS.URL) : history.push(MENU.URL)
  }

  componentDidMount = () => {
    const { clearCart } = this.props
    clearCart()
    localStorage.clear()
  }

  render = () => {
    return (
      <div style={{ position: "relative" }}>
        <Helmet title={TITLE_PREFIX + ACCEPTED.TITLE} />
        <div id="order" className="form-layout">
          <div id="order-header">
            <div id="logo" className="order-logo" />
            <h2>{ACCEPTED.TITLE}</h2>
          </div>
          <div id="order-content">
            <div className="congratulation">
              <img src="/images/success.png" alt="pic" />
              <div>
                <p>Ваш заказ принят.</p>
                <p>Ожидайте звонка от оператора.</p>
              </div>
            </div>
          </div>
          <div id="submit">
            <div className="z_btn order-btn" onClick={this.handleClick}>
              Далее
            </div>
          </div>
        </div>
        <div id="leaf-right" className="leaf leafs" />
        <div id="leaf-left" className="leaf leafs" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispathToProps = dispatch => {
  const { clearCart } = Cart.actions
  return bindActionCreators({ clearCart }, dispatch)
}

const ReduxWrapper = connect(mapStateToProps, mapDispathToProps)
const WrappedComponent = ReduxWrapper(Accepted)
const RoterWrapper = withRouter(WrappedComponent)

export default RoterWrapper