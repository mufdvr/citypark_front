import React from 'react'
import { renderRoutes } from 'react-router-config'

import { PERSONAL } from '../../links'
import { Header, NavigationBar, SideBar } from 'components'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="content" style={{height: "500px"}}>
      <div className="partbody">
        { route && renderRoutes(route.routes) }
      </div>
    </div>
  </div>



  /*export default ({ route }) =>
    <div style={{lineHeight: "22px"}}>
      <div className="fold fold_side" />
      <SideBar />
      <div className="content" style={{height: "500px"}}>
        <Header
          side="left"
          title={PERSONAL.title}
          link={PERSONAL.url}
        />
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      <NavigationBar />
    </div>*/
