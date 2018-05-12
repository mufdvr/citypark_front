import * as components from './components'

export const MAIN = {
  url: '/rest',
  title: 'Ресторан и летнее кафе'
}
export const RESTAURANT = {
  url: MAIN.url + '/restaurant',
  title: 'Ресторан'
}
export const CAFE = {
  url: MAIN.url + '/cafe',
  title: 'Летнее кафе'
}

const routes = [
  {
    path: MAIN.url,
    component: components.Layout,
    routes: [
      {
        path: MAIN.url,
        exact: true,
        component: components.Main
      },
      {
        path: RESTAURANT.url,
        component: components.Restaurant
      },
      {
        path: CAFE.url,
        component: components.Cafe
      }
    ]
  }
]

export default routes
