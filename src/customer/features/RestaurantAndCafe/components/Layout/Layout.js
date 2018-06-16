import React from 'react'
import { renderRoutes } from 'react-router-config'

import { REST_MAIN } from '../../links'
import { Header, Chef, NavigationBar, SideBar } from 'components'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <Header
        side="left"
        title={REST_MAIN.title}
        link={REST_MAIN.url}
      />
      <div className="partbody">
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <Chef />
    <NavigationBar />
  </div>
