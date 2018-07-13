import React from 'react'
import { renderRoutes } from 'react-router-config'

import { PERSONAL } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <div className="partbody">
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <NavigationBar />
  </div>
