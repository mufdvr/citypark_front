import React from 'react'
import { renderRoutes } from 'react-router-config'

import { SideBar, Footer, Chef, NavigationBar } from 'components'

export default ({ route, location }) => {
  return <div className="body">
    <div className="p1" />
    <div className="p2" />
    {
      location.pathname === "/" ?
        <div>
          <div className="fold fold_home" />
          {route && renderRoutes(route.routes)}
        </div>
      :
      <div style={{lineHeight: "22px"}}>
        <div className="fold fold_side" />
        <SideBar />
        <div className="content">
          <div className="partbody">
            {route && renderRoutes(route.routes)}
          </div>
        </div>
      </div>
    }
    <Chef />
    <Footer />
    <NavigationBar />
  </div>
}
