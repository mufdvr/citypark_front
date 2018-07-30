import * as components from './components'
import * as containers from './containers'
import * as links from './links'

const routes = [
  {
    path: links.REST_MAIN.URL,
    component: components.Layout,
    routes: [
      {
        path: links.REST_MAIN.URL,
        exact: true,
        component: components.RestaurantAndCafe
      },
      {
        path: links.RESTAURANT.URL,
        component: components.Restaurant
      },
      {
        path: links.CAFE.URL,
        component: components.Cafe
      },
      {
        path: links.NEWS.URL,
        exact: true,
        component: containers.News
      },
      {
        path: links.NEWS_SHOW.URL,
        component: containers.NewsShow
      },
      {
        path: links.MENU.URL,
        component: containers.Menu
      },
      {
        path: links.CHEF_BLOG.URL,
        exact: true,
        component: containers.ChefBlog
      },
      {
        path: links.CHEF_BLOG_SHOW.URL,
        component: containers.ChefBlogShow
      }
    ]
  }
]

export default routes
