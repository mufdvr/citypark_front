import React from 'react'
import PropTypes from 'prop-types'

const RoomItem = ({ bannerUrl, cost, link, title, description}) =>
  <div className="room">
    <div className="r_img">
      <img
        alt="pic"
        src={bannerUrl}
      />
    </div>
    <div className="r_body">
      <div className="r_title">
        <a href={link}>{title}</a>
      </div>
      <div className="r_ttx">{description}</div>
      <div className="r_summ">
        <span className="s">{cost}</span> ₽/ сутки
      </div>
    </div>
  </div>

RoomItem.propTypes = {
  bannerUrl: PropTypes.string,
  cost: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default RoomItem
