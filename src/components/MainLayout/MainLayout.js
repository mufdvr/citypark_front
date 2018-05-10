import React from 'react'
import { renderRoutes } from 'react-router-config'

import { Header, SideBar, Footer, Chef, NavigationBar } from 'components'

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
      <div>
        <div className="fold fold_side" />
        <SideBar />
        <div className="content">
          <div className="partbody">
          <Header
            side={"left"}
            title={"Ресторан и летнее кафе"}
            link={"/rest"}
            backgroundImage={"/images/header/left.jpg"}
          />
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
