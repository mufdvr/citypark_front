import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Breadcrumbs } from 'components'
import { Dish } from 'features/RestaurantAndCafe/containers'
import { Cart } from 'features/Cart/containers'
import * as actions from '../../actions'
import * as links from '../../links'

class Favorites extends React.Component {

  componentDidMount = () => {
    const { fetching, getFavorites, loaded } = this.props
    !fetching && !loaded && getFavorites()
  }

  dishesList = () => {
    const { favorites } = this.props
    return favorites ?
     favorites.length ? favorites.map(dish =>
      <Dish key={dish.id} {...dish} fav />
     ) : <div>Здесь пока ничего нет.</div>
    : null
  }

  render = () => {
    return (
      <div className="light">
        { Breadcrumbs({links:  [ links.PERSONAL, links.FAVORITES ]}) }
        <Cart />
        <div className="cat_wrapper" style={{top: 0}}>
          <div className="vrprig"><br/></div>
          <div className="cat_content">
            { this.dishesList() }
            <a className="gtcat">Наверх</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, payload } = state.favorites
  return {
    fetching,
    favorites: payload,
    loaded: !!payload.length
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  ...actions.favorites,
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Favorites)
export default WrappedComponent
