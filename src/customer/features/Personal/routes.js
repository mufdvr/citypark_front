import * as components from './components'
import * as containers from './containers'
import * as links from './links'

const routes = [
  {
    path: links.PERSONAL.url,
    component: components.Layout,
    routes: [
      {
        path: links.PERSONAL.url,
        exact: true,
        component: components.TabSheet,
      },
      {
        path: links.FAVORITES.url,
        component: containers.Favorites
      },
      {
        path: links.ORDERS.url,
        component: containers.Orders
      }
    ]
  }
]

export default routes
