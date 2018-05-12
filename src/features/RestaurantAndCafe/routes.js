import * as components from './components'

export const MAIN          = '/rest'
export const RESTAURANT    = MAIN + '/restaurant'
export const CAFE          = MAIN + '/cafe'

const routes = [
  {
    path: MAIN,
    component: components.Layout,
    routes: [
      {
        path: MAIN,
        exact: true,
        component: components.Main
      },
      {
        path: RESTAURANT,
        component: components.Restaurant
      },
      {
        path: CAFE,
        component: components.Cafe
      }
    ]
  }
]

export default routes
