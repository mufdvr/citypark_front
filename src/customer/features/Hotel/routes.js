import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.HOTEL_MAIN.url,
    component: components.Layout,
    routes: [
      {
        path: links.HOTEL_MAIN.url,
        exact: true,
        component: components.Main
      },
      {
        path: links.CATALOG.url,
        component: components.RoomCatalog
      },
      {
        path: links.DOCUMENTATION.url,
        component: components.Documentation
      }
    ]
  }
]

export default routes
