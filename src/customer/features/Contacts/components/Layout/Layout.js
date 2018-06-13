import React from 'react'
import { renderRoutes } from 'react-router-config'

import { CONTACTS } from '../../routes'
import { Header, NavigationBar, SideBar } from 'components'

export default ({ route }) =>
  <div style={{lineHeight: "22px"}}>
    <div className="fold fold_side" />
    <SideBar />
    <div className="content">
      <div className="partbody">
        <Header
          side="left"
          title={CONTACTS.title}
          link={CONTACTS.url}
        />
        { route && renderRoutes(route.routes) }
      </div>
    </div>
    <NavigationBar />
  </div>
