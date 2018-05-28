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
export const NEWS_SHOW = {
  url: NEWS.url + '/:id'
}
export const MENU = {
  url: REST_MAIN.url + '/menu',
  title: 'Меню'
}
export const CHEF_BLOG = {
  url: REST_MAIN.url + '/chefblog',
  title: 'Блог шеф-повара'
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
        exact: true,
        component: containers.News
      },
      {
        path: NEWS_SHOW.url,
        component: containers.NewsShow
      },
      {
        path: MENU.url,
        component: containers.Menu
      },
      {
        path: CHEF_BLOG.url,
        exact: true,
        component: components.ChefBlog
      }
    ]
  }
]

export default routes
