import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Breadcrumbs } from 'components'
import * as actions from '../../actions'
import * as links from '../../links'
import { OrderItem } from '../../components'
import { Cart } from 'features/Cart/containers'

class Orders extends React.Component {

  componentDidMount = () => {
    const { fetching, getOrders } = this.props
    !fetching && getOrders()
  }

  ordersList = () => {
    const { orders } = this.props
    return orders ? orders.map(order => <OrderItem key={order.id} order={order} />) : null
  }

  render = () =>
    <div className="light">
      <Cart />
      <Breadcrumbs links={[ links.PERSONAL, links.ORDERS ]} />
      { this.ordersList() }
    </div>
}

const mapStateToProps = state => ({
  fetching: state.personal.fetching,
  orders: state.personal.payload.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.orders
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Orders)
export default WrappedComponent
