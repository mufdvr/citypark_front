import * as components from './components'
import * as containers from './containers'
import * as links from './links'

const routes = [
  {
    path: links.REST_MAIN.url,
    component: components.Layout,
    routes: [
      {
        path: links.REST_MAIN.url,
        exact: true,
        component: components.Main
      },
      {
        path: links.RESTAURANT.url,
        component: components.Restaurant
      },
      {
        path: links.CAFE.url,
        component: components.Cafe
      },
      {
        path: links.NEWS.url,
        exact: true,
        component: containers.News
      },
      {
        path: links.NEWS_SHOW.url,
        component: containers.NewsShow
      },
      {
        path: links.MENU.url,
        component: containers.Menu
      },
      {
        path: links.CHEF_BLOG.url,
        exact: true,
        component: containers.ChefBlog
      },
      {
        path: links.CHEF_BLOG_SHOW.url,
        component: containers.ChefBlogShow
      }
    ]
  }
]

export default routes
