import MainLayout from './components/MainLayout'
import Home from 'features/Home'
import RestaurantAndCafe from 'features/RestaurantAndCafe'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...RestaurantAndCafe.routes
    ]
  }
]

export default routes
