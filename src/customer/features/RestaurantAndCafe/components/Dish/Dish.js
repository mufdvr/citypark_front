import React from 'react'
import PropTypes from 'prop-types'

const Dish = ({ id, title, cost, imageThumb, imageFull, description, weight }) =>
  <div className="bludo">
    <div className="bludo_img">
      <a href={imageFull} className="gmg">
        <img src={imageThumb} />
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
      <div className="z_btn">Добавить в список заказа</div>
    </div>
  </div>

Dish.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  imageThumb: PropTypes.string,
  imageFull: PropTypes.string,
  description: PropTypes.string,
  weight: PropTypes.string.isRequired
}

export default Dish
