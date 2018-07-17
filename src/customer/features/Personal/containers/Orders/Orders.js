import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Breadcrumbs } from 'components'
import * as actions from '../../actions'
import * as links from '../../links'
import { OrderItem } from '../../components'
import { Cart } from 'features'

class Orders extends React.Component {

  componentDidMount = () => {
    const { fetching, getOrders } = this.props
    !fetching && getOrders()
  }

  ordersList = () => {
    const { orders, addItems } = this.props
    return orders && orders.length ?
      orders.map(order => <OrderItem key={order.id} addItems={addItems} order={order} />)
      : <div>У Вас пока нет заказов.</div>
  }

  render = () =>
    <div className="light">
      <Cart.containers.Cart />
      <Breadcrumbs links={[ links.PERSONAL, links.ORDERS ]} />
      { this.ordersList() }
    </div>
}

const mapStateToProps = state => ({
  fetching: state.personal.fetching,
  orders: state.personal.payload.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItems: Cart.actions.addItems,
  ...actions.orders
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Orders)
export default WrappedComponent
