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
        exact: true,
        component: containers.OrderDetails
      },
      {
        path: links.PAYMENT.URL,
        exact: true,
        component: containers.Payment
      }
    ]
  }
]

export default routes
