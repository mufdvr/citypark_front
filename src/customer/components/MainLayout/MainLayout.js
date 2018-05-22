import React from 'react'
import { renderRoutes } from 'react-router-config'

import { Footer } from 'components'

export default ({ route }) =>
  <div className="body">
    <div className="p1" />
    <div className="p2" />
    {route && renderRoutes(route.routes)}
    <Footer />
  </div>
