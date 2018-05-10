import React from 'react'
import PropTypes from 'prop-types'

const RoomsCatalog = ({ children }) =>
  <div className="room_catalog">
    <div className="news_title">
      <a href="hotel/katalog-nomerov/">Каталог номеров</a>
    </div>
    { children }
  </div>

RoomsCatalog.propTypes = {
  children: PropTypes.node.isRequired
}

export default RoomsCatalog
