import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Dish } from '../../containers'
import * as actions from '../../actions'

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  componentWillReceiveProps = nextProps => {
    const { favorites } = this.props
    if (!favorites && nextProps.favorites) this.setState({
      visible: true,
      fetching: false,
    })
  }

  handleClick = event => {
    const { favorites, getFavorites } = this.props
    const { visible } = this.state
    event.preventDefault()
    this.setState({
      visible: favorites && !visible,
      fetching: !favorites
    })
    !favorites && getFavorites()
  }

  dishesList = () => {
    const { favorites } = this.props
    return favorites ? favorites.map(dish =>
      <Dish key={dish.id} {...dish} fav />
    ) : null
  }

  render = () => {
    const { visible, fetching } = this.state
    return (
      <div>
        <div className="menu_cat_title">
          <div className="mcl"></div>
          <div className="mcr"></div>
          <div className="mctt">
            { fetching ? <div className="cwait" /> : null }
            <a onClick={this.handleClick}>
              Избранное
            </a>
          </div>
          <div className="mshade"></div>
        </div>
        <div className="cat_wrapper" style={ visible ? null : {height: 0} }>
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

const mapStateToProps = state => ({
  fetching: state.restcafe.fetching,
  favorites: state.restcafe.payload.favorites
})

const mapDispathToProps = dispatch => bindActionCreators ({
  ...actions.favorites,
}, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Favorites)
