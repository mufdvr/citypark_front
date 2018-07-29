import * as containers from './containers'
import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.ORDER_DETAILS.url,
    component: components.Layout,
    routes: [
      {
        path: links.ORDER_DETAILS.url,
        component: containers.OrderDetails
      }
    ]
  }
]

export default routes
