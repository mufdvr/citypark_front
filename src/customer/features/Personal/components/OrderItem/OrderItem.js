import React from 'react'
import PropTypes from 'prop-types'

const OrderItem = ({ order }) =>
  <div className="order-item">
    <h3>Дата заказа {order.created_at}</h3>
  </div>

export default OrderItem
