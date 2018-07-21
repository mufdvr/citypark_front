import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ChefBlogDishItem = ({ title, description, created_at, image }) =>
  <div className="room_list" style={{background: "0"}}>
    <div className="room_list_img" style={{border: "2px solid #45312b"}}>
      <img width="260" height="170" src={process.env.REACT_APP_BACK_ROOT + image} alt="pic" />
    </div>
    <div className="room_list_txt">
      <div className="room_list_title"><Link to="tsd">{title}</Link></div>
      {description}
    </div>

    <div className="room_empty" style={{position: "absolute", right: "2px", bottom: "2px"}}>
      {created_at}
    </div>
  </div>

ChefBlogDishItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ChefBlogDishItem
