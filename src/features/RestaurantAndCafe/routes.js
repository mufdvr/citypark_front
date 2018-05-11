import * as components from './components'

export const MAIN = '/rest'
export const RESTAURANT = MAIN + '/restaurant'

const routes = [
  {
    path: MAIN,
    component: components.Header
  },
  {
    path: MAIN,
    exact: true,
    component: components.Main
  },
  {
    path: RESTAURANT,
    exact: true,
    component: components.Restaurant
  }
]

export default routes
