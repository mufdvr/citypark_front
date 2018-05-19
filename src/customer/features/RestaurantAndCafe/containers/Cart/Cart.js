import React from 'react'
import { connect } from 'react-redux'

const CART_STATE = {
  close: {left: '-1000px'},
  hidden: {left: '-352px'},
  open: {left: '10px'}
}

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartState: CART_STATE.hidden
    }
  }

  render = () => {
    const { cartState } = this.state
    return (
      <div className="shopping" style={cartState}>
        <div className="t_list">
          <div className="tovar" id="t_bl_73_list">
            <div className="t_remove">x</div>
            <div className="t_countbox">
              <div className="t_count">1</div>
              <div className="t_btn t_minus">-</div>
              <div className="t_btn t_plus">+</div>
            </div>
            <div className="t_text">
              <div className="t_name">Мясная нарезка</div>
              <div style={{display: "table-row"}}>
                <div className="t_summ"><span className="t_summ_num">600</span>₽</div>
              </div>
            </div>
          </div>
        </div>

        <div className="basket_summ">
          <div id="free_dost">Бесплатная доставка!</div>
          Сумма заказа: <span id="t_all_summ">540</span>₽
          <div id="skidka">С учетом скидки 10%</div>
        </div>

        <div className="zakaz_info">
          <div style={{fontSize: "24px", lineHeight: "24px"}}>8-918-311-97-91</div>
          Пожалуйста, позвоните по этому номеру и продиктуйте ваш заказ.
        </div>


        <div id="s_open_btn">
          <div></div>
        </div>
      </div>
    )
  }
}

export default Cart
