import React from 'react'
import { renderRoutes } from 'react-router-config'

import { MAIN } from '../../routes'
import { Header } from 'components'

export default ({ route }) =>
  <div>
    <Header
      side="left"
      title={MAIN.title}
      link={MAIN.url}
    />
    { route && renderRoutes(route.routes) }
  </div>
