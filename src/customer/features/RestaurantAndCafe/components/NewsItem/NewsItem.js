import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NewsItem = ({ id, title, image, created_at }) =>
  <div className="page_list_wrapper">
    <div className="page_date">{created_at}</div>
    <div className="page_img">
      <img src={process.env.REACT_APP_BACK_ROOT + image} alt="pic" />
    </div>
    <div className="description">
      <Link to="wtf" className="dttl">{title}</Link><br/>
    </div>
  </div>

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
}

export default NewsItem
