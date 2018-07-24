import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RoomListItem = ({ image, description, cost, freeCount, link }) =>
  <div className="room_list">
    <div className="room_list_img">
      <img src={image} alt="img" />
    </div>
    <div className="room_list_txt">
      <div className="room_list_title"><Link to={link.url}>{link.title}</Link></div>
      {description}
      <div className="r_summ r_summ_side" style={{position: "absolute", bottom: "10px"}}><span className="s">{cost}</span> ₽/сутки</div>
    </div>

    <div className="room_empty" style={{position: "absolute", right:"2px", bottom:"2px"}}>
      <div className="re_num"></div>
      <div className="re_txt">
      {
        (() => {
          switch (freeCount) {
            case 0:
              return "Нет свободных номеров"
            case 1:
              return "1 cвободный номер"
            case 2:
            case 3:
            case 4:
              return freeCount + " свободных номера"
            default:
              return freeCount + " свободных номеров"
          }
        })()
      }
      <br/>такого типа</div>
    </div>
  </div>

RoomListItem.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  freeCount: PropTypes.number.isRequired
}

export default RoomListItem
