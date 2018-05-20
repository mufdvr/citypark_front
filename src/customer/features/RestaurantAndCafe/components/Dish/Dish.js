import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'

const Dish = ({ id, title, cost, description, weight, addToCart, images: { preview, full } }) =>
  <div className="bludo">
    <div className="bludo_img">
      <a href={full} className="gmg">
        <img src={process.env.REACT_APP_BACK_ROOT + preview} />
      </a>
    </div>
    <div className="bludo_txt">
      <div className="bludo_title">{title}</div>
      {description}
    </div>
    <div className="bludo_dop">
      <div className="bl_cena">
        <span className="gramm">{weight}</span>
        <span className="bsm"><span className="bsm_n">{cost}</span><span style={{fontSize:"30px"}}>₽</span></span>
      </div>
      <div onClick={addToCart.bind(null, id, title, cost)} className="z_btn">Добавить в список заказа</div>
    </div>
  </div>

Dish.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  images: PropTypes.object,
  description: PropTypes.string,
  weight: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Dish
