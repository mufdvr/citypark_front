import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { Dish } from '../../components'
import * as actions from '../../actions'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  componentWillReceiveProps = nextProps => {
    const { index, categories } = this.props
    if (!categories[index].dishes && nextProps.categories[index].dishes) this.setState({
      visible: true,
      fetching: false,
    })
  }

  handleClick = event => {
    const { categories, index, getDishes } = this.props
    const { visible } = this.state
    event.preventDefault()
    this.setState({
      visible: categories[index].dishes && !visible,
      fetching: !categories[index].dishes
    })
    !categories[index].dishes && getDishes(categories[index].id)
  }

  dishesList = () => {
    const { categories, index, addToCart } = this.props
    return categories[index].dishes ? categories[index].dishes.map(dish =>
      <Dish key={dish.id} addToCart={addToCart} {...dish} />
    ) : null
  }

  render = () => {
    const { title, cookingTime } = this.props
    const { visible, fetching } = this.state
    return (
      <div>
        <div className="menu_cat_title">
          <div className="mcl"></div>
          <div className="mcr"></div>
          <div className="mctt">
            { fetching ? <div className="cwait" /> : null }
            <a onClick={this.handleClick}>
              {title}
            </a>
          </div>
          <div className="mshade"></div>
        </div>
        <div className="cat_wrapper" style={ visible ? null : {height: 0} }>
          <div className="vrprig">Время приготовления<br/>{cookingTime}</div>
          <div className="cat_content">
            { this.dishesList() }
            <a className="gtcat">Наверх к категории</a>
          </div>
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  index: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  getDishes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  cookingTime: PropTypes.string
}

const mapStateToProps = state => ({
  fetching: state.restcafe.fetching,
  categories: state.restcafe.payload.categories
})

const mapDispathToProps = dispatch => bindActionCreators ({
  ...actions.menu,
  ...actions.cart
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispathToProps)
const WrappedComponent = ReduxWrapper(Category)
export default WrappedComponent
