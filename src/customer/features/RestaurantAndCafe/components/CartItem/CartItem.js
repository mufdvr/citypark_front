import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ id, title, cost, count, changeCount, deleteItem }) =>
  <div className="tovar">
    <div onClick={deleteItem.bind(null, id)} className="t_remove">x</div>
    <div className="t_countbox">
      <div className="t_count">{count}</div>
      <div onClick={changeCount.bind(null, id, -1)} className="t_btn t_minus">-</div>
      <div onClick={changeCount.bind(null, id, 1)} className="t_btn t_plus">+</div>
    </div>
    <div className="t_text">
      <div className="t_name">{title}</div>
      <div style={{display: "table-row"}}>
        <div className="t_summ"><span className="t_summ_num">{cost}</span>₽</div>
      </div>
    </div>
  </div>

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  changeCount: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default CartItem
