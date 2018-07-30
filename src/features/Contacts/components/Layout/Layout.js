import React from 'react'
import { renderRoutes } from 'react-router-config'

import { CONTACTS } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar showRestaurantContacts={false} showHotelContacts={false} />
    <div className="content">
      { Header({
        side: "left",
        title: CONTACTS.TITLE,
        link: CONTACTS.URL
      })}
      <div className="partbody">
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <NavigationBar />
  </div>
