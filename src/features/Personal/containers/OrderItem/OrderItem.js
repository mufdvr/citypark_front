import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import statuses from './statuses'
import { OrderDetails } from 'features'

class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDishes: false
    }
  }

  dishesList = () => {
    const { dishes } = this.props
    return (
      <ol>
        { dishes.map(dish => <li key={dish.id}>{dish.title} - {dish.count}</li>) }
      </ol>
    )  
  }

  handleClick = () =>
    this.setState(prev => ({
      showDishes: !prev.showDishes
    }))

  handlePayment = () => {
    const { pushOrder, signature, history } = this.props
    pushOrder(signature)
    history.push(OrderDetails.links.PAYMENT.URL)
  }  

  render = () => {
    const { id, status, dishes, created_at, freezed_amount, addItems, signature } = this.props
    const { showDishes } = this.state
    return (
      <div className="order-item" onClick={this.handleClick}>
        <div className="ord-header">
          <h3>Дата заказа {created_at}</h3>
          <span className="bsm">
            <span className="bsm_n">{freezed_amount}</span>
            <span style={{fontSize: "30px"}}>₽</span>
          </span>
        </div>
        <div className="green">
          { statuses[status] }
        </div>
        <a className="gtcat">заказ {id}</a>
        {
          showDishes ?
          <div className="order-dish-list">
            {this.dishesList()}
            {
              signature ? 
                <div className="z_btn" onClick={this.handlePayment}>Оплатить заказ</div>
              : <div className="z_btn" onClick={() => addItems(dishes)}>Повторить заказ</div>
            }  
          </div>
          : null
        }
      </div>
    )
  }
}

OrderItem.propTypes = {
  id: PropTypes.string,
  created_at: PropTypes.string,
  status: PropTypes.string,
  freezed_amount: PropTypes.number,
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cost: PropTypes.number,
    count: PropTypes.number
  })),
  addItems: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
  pushOrder: OrderDetails.actions.pushOrder
}, dispatch)

const ReduxWrapper = connect(null, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(withRouter(OrderItem))
export default WrappedComponent

