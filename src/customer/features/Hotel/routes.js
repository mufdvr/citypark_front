import * as components from './components'

export const HOTEL_MAIN = {
  url: '/hotel',
  title: 'Отель-люкс'
}
export const CATALOG = {
  url: HOTEL_MAIN.url + '/catalog',
  title: 'Каталог номеров'
}
export const DOCUMENTATION = {
  url: HOTEL_MAIN.url + '/documentation',
  title: 'Документация'
}

const routes = [
  {
    path: HOTEL_MAIN.url,
    component: components.Layout,
    routes: [
      {
        path: HOTEL_MAIN.url,
        exact: true,
        component: components.Main
      },
      {
        path: CATALOG.url,
        component: components.RoomCatalog
      },
      {
        path: DOCUMENTATION.url,
        component: components.Documentation
      }
    ]
  }
]

export default routes
