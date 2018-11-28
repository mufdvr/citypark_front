import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.PUBLIC_OFFER.URL,
    component: components.Layout,
    routes: [
      {
        path: links.PUBLIC_OFFER.URL,
        exact: true,
        component: components.PublicOffer
      }
    ]
  }
]

export default routes
