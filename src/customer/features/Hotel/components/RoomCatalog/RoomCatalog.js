import React from 'react'

import { SocShare, Breadcrumbs } from 'components'
import { RoomListItem } from '../../components'
import { HOTEL_MAIN, CATALOG } from '../../routes'
import * as images from './images'

export default () =>
  <div className="light">
    <Breadcrumbs links={[ HOTEL_MAIN, CATALOG ]} />
    <SocShare
      link="http://cityparkvip.ru/rest/"
      title="РГК «City Park» - Ресторан и летнее кафе"
      image="http://cityparkvip.ru/assets/templates/citypark/site-preview.jpg"
    />
    <RoomListItem
      title="Одноместные номера"
      description="Одноместные номера с двуспальной кроватью."
      cost="2500-3000"
      freeCount={2}
      image={images.catalog1}
    />
    <RoomListItem
      title="Двухместные номера"
      description='Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью "Евро"'
      cost="3000"
      freeCount={6}
      image={images.catalog2}
    />
    <RoomListItem
      title="VIP-номер"
      description="Двухкомнатный номер (гостиная + спальня) с балконом."
      cost="5000"
      freeCount={0}
      image={images.catalog3}
    />

  </div>
