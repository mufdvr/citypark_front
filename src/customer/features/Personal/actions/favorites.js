import feedback from 'feedback'
import * as apiConst from '../apiConst'
import * as types from '../actionTypes'

export const getFavorites = () =>
  feedback.get(apiConst.FAVORITES, types.FAVORITES_INDEX)

export const delFavorite = id =>
  feedback.destroy(apiConst.FAVORITES + id, types.FAVORITES_DESTROY)    

export const addToFavorites = id =>
  feedback.post(apiConst.FAVORITES, types.ADD_TO_FAVORITES,
    {
      favorite: {
        dish_id: id
      }
    }
  )
