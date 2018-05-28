import MainLayout from './components/MainLayout'
import Home from 'features/Home'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
import OrderDetails from 'features/OrderDetails'
import Hotel from 'features/Hotel'
import { NotFound } from 'components'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...RestaurantAndCafe.routes,
      ...OrderDetails.routes,
      ...Hotel.routes
    ]
  },
  {
    path: '*', 
    component: NotFound
  }
]

export default routes
