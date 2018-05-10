import React from 'react'
import PropTypes from 'prop-types'

const News = ({ children }) =>
  <div className="news_block">
    <div className="news_title">
      <a href="rest/news/">Новости и мероприятия</a>
    </div>
    { children }
    <div className="new_end" />
  </div>

News.propTypes = {
  children: PropTypes.node.isRequired
}

export default News
