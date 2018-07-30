import * as components from './components'
import * as links from './links'

const routes = [
  {
    path: links.CONTACTS.URL,
    component: components.Layout,
    routes: [
      {
        path: links.CONTACTS.URL,
        component: components.Contacts
      }
    ]
  }
]

export default routes
