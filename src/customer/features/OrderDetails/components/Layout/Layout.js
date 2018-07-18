import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavigationBar } from 'containers'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="partbody" style={{paddingTop: "80px"}}>
      { route && renderRoutes(route.routes) }
    </div>
    <NavigationBar />
  </div>
