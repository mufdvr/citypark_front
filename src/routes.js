import { Contacts, Hotel, Personal, OrderDetails, Home, RestaurantAndCafe, PublicOffer, PrivatePolicy, Feedback } from 'features'
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
      ...PublicOffer.routes,
      ...PrivatePolicy.routes,
      ...Feedback.routes,
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
