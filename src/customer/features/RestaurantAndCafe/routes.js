import * as components from './components'
import * as containers from './containers'

export const REST_MAIN = {
  url: '/rest',
  title: 'Ресторан и летнее кафе'
}
export const RESTAURANT = {
  url: REST_MAIN.url + '/restaurant',
  title: 'Ресторан'
}
export const CAFE = {
  url: REST_MAIN.url + '/cafe',
  title: 'Летнее кафе'
}
export const NEWS = {
  url: REST_MAIN.url + '/news',
  title: 'Новости и мероприятия'
}
export const MENU = {
  url: REST_MAIN.url + '/menu',
  title: 'Меню'
}

const routes = [
  {
    path: REST_MAIN.url,
    component: components.Layout,
    routes: [
      {
        path: REST_MAIN.url,
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
      },
      {
        path: NEWS.url,
        component: containers.News
      },
      {
        path: MENU.url,
        component: containers.Menu
      }
    ]
  }
]

export default routes
