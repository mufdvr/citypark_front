import React from 'react'
import PropTypes from 'prop-types'

import statuses from './statuses'

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
    const { id, amount, mnt_signature } = this.props.signature  
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

export default OrderItem
