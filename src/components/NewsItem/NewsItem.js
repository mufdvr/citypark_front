import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RestaurantAndCafe from 'features/RestaurantAndCafe'

const NewsItem = ({ id, image, title, description, created_at, displayType }) =>
  <div className="new">
    <div className={`n_foto n_foto_${displayType}`}>
      <img
        className={`cover-${displayType}`}
        alt="pic"
        src={process.env.REACT_APP_API_GATEWAY + image}
      />
    </div>
    <div className={`n_body_${displayType}`}>
      <div className={`n_date n_date_${displayType}`}>
        {created_at}
      </div>
      <div className="n_title">
        <Link to={RestaurantAndCafe.links.NEWS.URL + '/' + id}>
          {title}
        </Link>
      </div>
      <div className="n_ttx">{description}</div>
    </div>
  </div>

NewsItem.propTypes = {
  created_at: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  displayType: PropTypes.string.isRequired
}

export default NewsItem
