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
        component: containers.Auth
      }
    ]
  }
]

export default routes
