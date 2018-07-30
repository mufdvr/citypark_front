import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import { Breadcrumbs } from 'components'
import * as actions from '../../actions'
import { PERSONAL, ORDERS } from '../../links'
import { OrderItem } from '../../components'
import { Cart } from 'features'
import { TITLE_PREFIX } from 'appConstants'

class Orders extends React.Component {

  componentDidMount = () => {
    const { fetching, getOrders, loaded } = this.props
    !fetching && !loaded && getOrders()
  }

  ordersList = () => {
    const { orders, addItems } = this.props
    return orders ?
      orders.length ? orders.map(order => <OrderItem key={order.id} addItems={addItems} {...order} />)
      : <div>У Вас пока нет заказов.</div>
    : null
  }

  render = () =>
    <div className="light">
      <Helmet title={TITLE_PREFIX + ORDERS.TITLE} />
      <Cart.containers.Cart />
      { Breadcrumbs({links:  [ PERSONAL, ORDERS ]}) }
      { this.ordersList() }
    </div>
}

const mapStateToProps = state => {
  const { fetching, payload } = state.orders
  return {
    fetching,
    orders: payload,
    loaded: !!payload.length
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addItems: Cart.actions.addItems,
  ...actions.orders
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Orders)
export default WrappedComponent
