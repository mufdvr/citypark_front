import React from 'react'
import { renderRoutes } from 'react-router-config'

import { PUBLIC_OFFER } from '../../links'
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
          title: PUBLIC_OFFER.TITLE,
          link: PUBLIC_OFFER.URL
        })}
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}
