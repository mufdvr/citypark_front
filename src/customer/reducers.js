import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { RestaurantAndCafe, OrderDetails, Personal, Cart } from 'features'

export default combineReducers({
  routing: routerReducer,
  restcafe: RestaurantAndCafe.reducer,
  order: OrderDetails.reducer,
  cart: Cart.reducer,
  ...Personal.reducers,
})
