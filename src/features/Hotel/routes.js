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
        component: components.Hotel
      },
      {
        path: links.CATALOG.url,
        exact: true,
        component: components.RoomCatalog
      },
      {
        path: links.DOCUMENTATION.url,
        component: components.Documentation
      },
      {
        path: links.SINGLE_ROOM.url,
        component: components.SingleRoom
      },
      {
        path: links.DOUBLE_ROOM.url,
        component: components.DoubleRoom
      },
      {
        path: links.VIP_ROOM.url,
        component: components.VipRoom
      }
    ]
  }
]

export default routes
