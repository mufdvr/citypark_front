import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Dish, Cart } from 'features/RestaurantAndCafe/containers'
import * as actions from '../../actions'

class Favorites extends React.Component {

  componentDidMount = () => {
    const { fetching, getFavorites } = this.props
    !fetching && getFavorites()
  }

  dishesList = () => {
    const { favorites } = this.props
    return favorites ? favorites.map(dish =>
      <Dish key={dish.id} {...dish} fav />
    ) : null
  }

  render = () => {
    return (
        <div className="cat_wrapper">
          <Cart />
          <div className="vrprig"><br/></div>
          <div className="cat_content">
            { this.dishesList() }
            <a className="gtcat">Наверх</a>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.personal.fetching,
  favorites: state.personal.payload.favorites
})

const mapDispathToProps = dispatch => bindActionCreators ({
  ...actions.favorites,
}, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Favorites)
