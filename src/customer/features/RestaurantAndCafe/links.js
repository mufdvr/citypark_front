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
