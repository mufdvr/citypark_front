import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { RestaurantAndCafe, OrderDetails, Personal, Cart, Hotel } from 'features'

export default combineReducers({
  routing: routerReducer,
  order: OrderDetails.reducer,
  cart: Cart.reducer,
  rooms: Hotel.reducer,
  ...RestaurantAndCafe.reducers,
  ...Personal.reducers,
})
