import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { DELIVERY_PHOTO } from './background'
import { RestaurantAndCafe } from 'features'

const Delivery = ({ displayType }) =>
  <Link to={RestaurantAndCafe.links.MENU.url}>
    <div className={`deliver_block deliver_block_${displayType}`}>
      <img
        alt="pic"
        className={`deliver-img deliver-img_${displayType}`}
        src={DELIVERY_PHOTO}
      />
      <div className="d_title">
        Доставка еды
      </div>
    </div>
  </Link>

Delivery.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default Delivery
