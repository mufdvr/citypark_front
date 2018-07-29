import React from 'react'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs } from 'components'
import { RoomListItem } from '../../components'
import * as links from '../../links'
import * as images from './images'
import { TITLE_PREFIX } from 'appConstants'

export default () =>
  <div className="light">
    <Helmet title={TITLE_PREFIX + links.CATALOG.title} />
    { Breadcrumbs({links:  [ links.HOTEL_MAIN, links.CATALOG ]}) }
    <SocShare
      link="http://cityparkvip.ru/rest/"
      title="РГК «City Park» - Ресторан и летнее кафе"
      image="http://cityparkvip.ru/assets/templates/citypark/site-preview.jpg"
    />
    { RoomListItem({
      description: "Одноместные номера с двуспальной кроватью.",
      cost: "2500-3000",
      freeCount: 2,
      image: images.catalog1,
      link: links.SINGLE_ROOM
    }) }
    { RoomListItem({
      description: 'Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью "Евро"',
      cost: "3000",
      freeCount: 6,
      image: images.catalog2,
      link: links.DOUBLE_ROOM
    }) }
    { RoomListItem({
      description: "Двухкомнатный номер (гостиная + спальня) с балконом.",
      cost: "5000",
      freeCount: 0,
      image: images.catalog3,
      link: links.VIP_ROOM
    }) }

  </div>
