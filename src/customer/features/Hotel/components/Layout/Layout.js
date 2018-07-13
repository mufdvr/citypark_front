import React from 'react'
import { renderRoutes } from 'react-router-config'

import { HOTEL_MAIN } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'  

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <Header
        side="left"
        title={HOTEL_MAIN.title}
        link={HOTEL_MAIN.url}
      />
      <div className="partbody">
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <NavigationBar />
  </div>
