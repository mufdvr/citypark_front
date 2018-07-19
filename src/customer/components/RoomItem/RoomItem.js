import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RoomItem = ({ imageUrl, cost, link, description, displayType}) =>
  <div className={`room room_${displayType}`}>
    {
      displayType === "home" &&
      <div className="r_img">
        <img
          alt="pic"
          src={imageUrl}
        />
      </div>
    }
    <div className={`r_body_${displayType}`}>
      <div className={`r_title r_title_${displayType}`}>
        <Link to={link.url}>{link.title}</Link>
      </div>
      {
        displayType === "home" && <div className="r_ttx">{description}</div>
      }
      <div className={`r_summ r_summ_${displayType}`}>
        <span className="s">{cost}</span> ₽/ сутки
      </div>
    </div>
  </div>

RoomItem.propTypes = {
  imageUrl: PropTypes.string,
  cost: PropTypes.string.isRequired,
  description: PropTypes.string,
  displayType: PropTypes.string.isRequired,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default RoomItem
