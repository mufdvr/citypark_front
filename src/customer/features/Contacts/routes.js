import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.CONTACTS.url,
    component: components.Layout,
    routes: [
      {
        path: links.CONTACTS.url,
        component: components.Contacts
      }
    ]
  }
]

export default routes
