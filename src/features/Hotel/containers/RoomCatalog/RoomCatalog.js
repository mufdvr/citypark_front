import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs } from 'components'
import { RoomListItem } from '../../components'
import { HOTEL_MAIN, CATALOG, SINGLE_ROOM, DOUBLE_ROOM, VIP_ROOM } from '../../links'
import * as images from './images'
import * as commonImages from 'images'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

const RoomCatalog = ({ rooms: {single_rooms, double_rooms, vip_room} }) =>
  <div className="light">
    <Helmet title={TITLE_PREFIX + CATALOG.TITLE} />
    { Breadcrumbs({links:  [ HOTEL_MAIN, CATALOG ]}) }
    <SocShare
      link={baseUrl() + CATALOG.URL}
      title={TITLE_PREFIX + CATALOG.TITLE}
      image={baseUrl() + commonImages.sitePreview}
    />
    { RoomListItem({
      description: "Одноместные номера с двуспальной кроватью.",
      cost: "2500-3000",
      freeCount: single_rooms,
      image: images.catalog1,
      link: SINGLE_ROOM
    }) }
    { RoomListItem({
      description: 'Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью "Евро"',
      cost: "3000",
      freeCount: double_rooms,
      image: images.catalog2,
      link: DOUBLE_ROOM
    }) }
    { RoomListItem({
      description: "Двухкомнатный номер (гостиная + спальня) с балконом.",
      cost: "5000",
      freeCount: vip_room,
      image: images.catalog3,
      link: VIP_ROOM
    }) }

  </div>

const mapStateToProps = state => ({
  rooms: state.rooms.payload
})

const ReduxWrapper = connect(mapStateToProps)
const WrappedComponent = ReduxWrapper(RoomCatalog)
export default WrappedComponent