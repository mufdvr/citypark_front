export const REST_MAIN = {
  URL: '/rest',
  TITLE: 'Ресторан и летнее кафе'
}
export const RESTAURANT = {
  URL: REST_MAIN.URL + '/restaurant',
  TITLE: 'Ресторан'
}
export const CAFE = {
  URL: REST_MAIN.URL + '/kafe',
  TITLE: 'Летнее кафе'
}
export const NEWS = {
  URL: REST_MAIN.URL + '/news',
  TITLE: 'Новости и мероприятия'
}
export const NEWS_SHOW = {
  URL: NEWS.URL + '/:id'
}
export const MENU = {
  URL: REST_MAIN.URL + '/menu',
  TITLE: 'Меню'
}
export const CHEF_BLOG = {
  URL: REST_MAIN.URL + '/shefblog',
  TITLE: 'Блог шеф-повара'
}
export const CHEF_BLOG_SHOW = {
  URL: CHEF_BLOG.URL + '/:id'
}
