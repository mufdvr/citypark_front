import React from 'react'
import PropTypes from 'prop-types'

import { RoomItem } from 'components'
import * as images from './images'

const RoomsCatalog = ({ displayType }) =>
  <div className={`room_catalog room_catalog_${displayType}`}>
    <div className={`news_title news_title_${displayType}`}>
      <a href="hotel/katalog-nomerov/">Каталог номеров</a>
    </div>
    <RoomItem
      displayType={displayType}
      imageUrl={images.photo1}
      title="Одноместные номера"
      cost="2500-3000"
      link="hotel/katalog-nomerov/odnomestnyie.html"
      description="Одноместные номера с двуспальной кроватью."
    />
    <RoomItem
      displayType={displayType}
      imageUrl={images.photo2}
      title="Двухместные номера"
      cost="3000"
      link="hotel/katalog-nomerov/dvuxmestnyie-nomera.html"
      description={"Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью \"Евро\""}
    />
    <RoomItem
      displayType={displayType}
      imageUrl={images.photo3}
      title="VIP-номер"
      cost="5000"
      link="hotel/katalog-nomerov/vip.html"
      description="Двухкомнатный номер (гостиная + спальня) с балконом."
    />
  </div>

RoomsCatalog.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default RoomsCatalog
