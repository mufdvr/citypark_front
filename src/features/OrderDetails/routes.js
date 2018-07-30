import * as containers from './containers'
import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.ORDER_DETAILS.URL,
    component: components.Layout,
    routes: [
      {
        path: links.ORDER_DETAILS.URL,
        component: containers.OrderDetails
      }
    ]
  }
]

export default routes
