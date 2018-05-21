import React from 'react'
import { renderRoutes } from 'react-router-config'

import { SideBar, Footer, Chef, NavigationBar } from 'components'
import { OrderDetails } from 'features/OrderDetails/containers'

export default ({ route }) =>
  <div className="body">
    <div className="p1" />
    <div className="p2" />
    {route && renderRoutes(route.routes)}
    <Footer />
  </div>
