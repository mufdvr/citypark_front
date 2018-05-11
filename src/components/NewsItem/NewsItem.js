import React from 'react'
import PropTypes from 'prop-types'

const NewsItem = ({ bannerUrl, title, date, link, displayType }) =>
  <div className="new">
    <div className={`n_foto n_foto_${displayType}`}>
      <img
        alt="pic"
        src={bannerUrl}
      />
    </div>
    <div className={`n_body_${displayType}`}>
      <div className={`n_date n_date_${displayType}`}>
        {date}
      </div>
      <div className="n_title">
        <a href={link}>
              {title}
            </a>
      </div>
      <div className="n_ttx">
      </div>
    </div>
  </div>

NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bannerUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  displayType: PropTypes.string.isRequired
}

export default NewsItem
