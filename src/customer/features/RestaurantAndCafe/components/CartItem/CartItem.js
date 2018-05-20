import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ title, cost, count }) =>
  <div className="tovar" id="t_bl_73_list">
    <div className="t_remove">x</div>
    <div className="t_countbox">
      <div className="t_count">{count}</div>
      <div className="t_btn t_minus">-</div>
      <div className="t_btn t_plus">+</div>
    </div>
    <div className="t_text">
      <div className="t_name">{title}</div>
      <div style={{display: "table-row"}}>
        <div className="t_summ"><span className="t_summ_num">{cost}</span>₽</div>
      </div>
    </div>
  </div>

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
}

export default CartItem
