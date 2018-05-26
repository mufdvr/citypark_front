import React from 'react'
import { renderRoutes } from 'react-router-config'

import { HOTEL_MAIN } from '../../routes'
import { Header, NavigationBar, SideBar } from 'components'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <div className="partbody">
        <Header
          side="left"
          title={HOTEL_MAIN.title}
          link={HOTEL_MAIN.url}
        />
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <NavigationBar />
  </div>
