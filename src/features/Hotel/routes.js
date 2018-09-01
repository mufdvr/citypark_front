import * as containers from './containers'
import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.HOTEL_MAIN.URL,
    component: components.Layout,
    routes: [
      {
        path: links.HOTEL_MAIN.URL,
        exact: true,
        component: components.Hotel
      },
      {
        path: links.CATALOG.URL,
        exact: true,
        component: containers.RoomCatalog
      },
      {
        path: links.DOCUMENTATION.URL,
        component: components.Documentation
      },
      {
        path: links.SINGLE_ROOM.URL,
        component: components.SingleRoom
      },
      {
        path: links.DOUBLE_ROOM.URL,
        component: components.DoubleRoom
      },
      {
        path: links.VIP_ROOM.URL,
        component: components.VipRoom
      }
    ]
  }
]

export default routes
