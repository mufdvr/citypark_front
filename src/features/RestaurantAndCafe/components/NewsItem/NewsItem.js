import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NEWS } from '../../links'

const NewsItem = ({ id, title, image, description, created_at }) =>
  <div className="page_list_wrapper">
    <div className="page_date">{created_at}</div>
    <div className="page_img">
      <img src={process.env.REACT_APP_API_GATEWAY + image} alt="pic" />
    </div>
    <div className="description">
      <Link to={NEWS.URL + '/' + id} className="dttl">{title}</Link><br/>
      {description}
    </div>
  </div>

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
}

export default NewsItem
