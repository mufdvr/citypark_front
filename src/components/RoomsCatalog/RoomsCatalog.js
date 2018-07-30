import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { RoomItem } from 'components'
import { Hotel } from 'features'
import * as images from './images'

const RoomsCatalog = ({ displayType }) => {
  const { CATALOG, SINGLE_ROOM, DOUBLE_ROOM, VIP_ROOM } = Hotel.links
  return (
    <div className={`room_catalog room_catalog_${displayType}`}>
      <div className={`news_title news_title_${displayType}`}>
        <Link to={CATALOG.URL}>{CATALOG.TITLE}</Link>
      </div>
      { RoomItem({
        displayType,
        imageUrl: images.photo1,
        cost: "2500-3000",
        link: SINGLE_ROOM,
        description: "Одноместные номера с двуспальной кроватью."
      })}
      { RoomItem({
        displayType,
        imageUrl: images.photo2,
        cost: "3000",
        link: DOUBLE_ROOM,
        description: "Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью \"Евро\""
      })}
      { RoomItem({
        displayType,
        imageUrl: images.photo3,
        cost: "5000",
        link: VIP_ROOM,
        description: "Двухкомнатный номер (гостиная + спальня) с балконом."
      })}
    </div>
  )
}

RoomsCatalog.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default RoomsCatalog
