import React from 'react'
import PropTypes from 'prop-types'

const News = ({ children, displayType }) =>
  <div className={`news_block news_block_${displayType}`}>
    <div className={`news_title news_title_${displayType}`}>
      <a href="rest/news/">Новости и мероприятия</a>
    </div>
    { children }
    <div className="new_end" />
  </div>

News.propTypes = {
  children: PropTypes.node.isRequired,
  displayType: PropTypes.string.isRequired
}

export default News
