import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RestaurantAndCafe from 'features/RestaurantAndCafe'

const News = ({ children, displayType }) =>
  <div className={`news_block news_block_${displayType}`}>
    <div className={`news_title news_title_${displayType}`}>
      <Link to={RestaurantAndCafe.links.NEWS.url}>
        Новости и мероприятия
      </Link>
    </div>
    { children }
    {/*<div className="new_end" />*/}
  </div>

News.propTypes = {
  children: PropTypes.node,
  displayType: PropTypes.string.isRequired
}

export default News
