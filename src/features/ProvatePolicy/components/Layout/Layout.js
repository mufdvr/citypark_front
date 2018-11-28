import React from 'react'
import { renderRoutes } from 'react-router-config'

import { PRIVATE_POLICY } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route }) => {

  return (
    <div style={{lineHeight: "22px"}}>
      <div className="fold fold_side" />
      <SideBar />
      <div className="content">
        { Header({
          side: "left",
          title: PRIVATE_POLICY.TITLE,
          link: PRIVATE_POLICY.URL
        })}
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}
