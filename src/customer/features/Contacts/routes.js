import * as components from './components'

export const CONTACTS = {
  url: '/contacts',
  title: 'Контакты'
}

const routes = [
  {
    path: CONTACTS.url,
    component: components.Layout,
    routes: [
      {
        path: CONTACTS.url,
        component: components.Main
      }
    ]
  }
]

export default routes
