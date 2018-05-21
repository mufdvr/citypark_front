import MainLayout from './components/MainLayout'
import Home from 'features/Home'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
import OrderDetails from 'features/OrderDetails'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...RestaurantAndCafe.routes,
      ...OrderDetails.routes
    ]
  }
]

export default routes
