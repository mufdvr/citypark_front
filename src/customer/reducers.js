import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import RestaurantAndCafe from 'features/RestaurantAndCafe'

export default combineReducers({
  routing: routerReducer,
  restcafe: RestaurantAndCafe.reducer
})
