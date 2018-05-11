import React from 'react'
import PropTypes from 'prop-types'

const RoomsCatalog = ({ children, displayType }) =>
  <div className={`room_catalog room_catalog_${displayType}`}>
    <div className={`news_title news_title_${displayType}`}>
      <a href="hotel/katalog-nomerov/">Каталог номеров</a>
    </div>
    { children }
  </div>

RoomsCatalog.propTypes = {
  children: PropTypes.node.isRequired,
  displayType: PropTypes.string.isRequired
}

export default RoomsCatalog
