import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import RestaurantAndCafe from 'features/RestaurantAndCafe'
import OrderDetails from 'features/OrderDetails'
import Personal from 'features/Personal'

export default combineReducers({
  routing: routerReducer,
  restcafe: RestaurantAndCafe.reducer,
  order: OrderDetails.reducer,
  personal: Personal.reducer
})
