import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'

class Orders extends React.Component {

  componentDidMount = () => {
    const { fetching, getOrders } = this.props
    !fetching && getOrders()
  }

  render = () =>
    <div>
      { this.props.orders }
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
