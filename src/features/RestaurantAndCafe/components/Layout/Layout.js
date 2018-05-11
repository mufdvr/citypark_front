import React from 'react'
import { renderRoutes } from 'react-router-config'

import { MAIN } from '../../routes'
import { Header } from 'components'

export default ({ route }) =>
  <div>
    <Header
      side="left"
      title="Ресторан и летнее кафе"
      link={MAIN}
    />
    { route && renderRoutes(route.routes) }
  </div>
