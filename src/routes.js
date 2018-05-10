import MainLayout from './components/MainLayout'
import Home from 'features/Home'
import Restaraunt from 'features/Restaraunt'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...Restaraunt.routes
    ]
  }
]

export default routes
