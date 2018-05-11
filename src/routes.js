import MainLayout from './components/MainLayout'
import Home from 'features/Home'
import Restaurant from 'features/Restaurant'

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...Home.routes,
      ...Restaurant.routes
    ]
  }
]

export default routes
