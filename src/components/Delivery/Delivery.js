import React from 'react'
import PropTypes from 'prop-types'

const Delivery = ({ displayType }) =>
  <a href="rest/menu/">
    <div className={`deliver_block deliver_block_${displayType}`}>
      <img
        alt="pic"
        className={`deliver-img deliver-img_${displayType}`}
        src="/images/delivery/2CAM6275.jpg"
      />
      <div className="d_title">
        Доставка еды
      </div>
    </div>
  </a>

Delivery.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default Delivery
