import Home from 'features/Home'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
import OrderDetails from 'features/OrderDetails'
import Hotel from 'features/Hotel'
import Contacts from 'features/Contacts'
import Personal from 'features/Personal'
import { MainLayout } from 'containers'
import { NotFound } from 'components'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...RestaurantAndCafe.routes,
      ...OrderDetails.routes,
      ...Hotel.routes,
      ...Contacts.routes,
      ...Personal.routes,
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
