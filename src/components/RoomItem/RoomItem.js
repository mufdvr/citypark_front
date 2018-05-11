import React from 'react'
import PropTypes from 'prop-types'

const RoomItem = ({ bannerUrl, cost, link, title, description, displayType}) =>
  <div className={`room room_${displayType}`}>
    {
      bannerUrl &&
      <div className="r_img">
        <img
          alt="pic"
          src={bannerUrl}
        />
      </div>
    }
    <div className={`r_body_${displayType}`}>
      <div className={`r_title r_title_${displayType}`}>
        <a href={link}>{title}</a>
      </div>
      {
        description && <div className="r_ttx">{description}</div>
      }
      <div className={`r_summ r_summ_${displayType}`}>
        <span className="s">{cost}</span> ₽/ сутки
      </div>
    </div>
  </div>

RoomItem.propTypes = {
  bannerUrl: PropTypes.string,
  cost: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  displayType: PropTypes.string.isRequired
}

export default RoomItem
