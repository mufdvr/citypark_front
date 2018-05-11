import * as components from './components'

export const MAIN = '/rest'
export const RESTAURANT = MAIN + '/restaurant'

const routes = [
  {
    path: MAIN,
    exact: true,
    component: components.Main
  },
  {
    path: RESTAURANT,
    component: components.Restaurant
  }
]

export default routes
