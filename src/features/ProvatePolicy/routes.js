import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.PRIVATE_POLICY.URL,
    component: components.Layout,
    routes: [
      {
        path: links.PRIVATE_POLICY.URL,
        exact: true,
        component: components.PrivatePolicy
      }
    ]
  }
]

export default routes
