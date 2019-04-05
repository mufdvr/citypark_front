import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { Dish } from '../../containers'
import * as actions from '../../actions'
import { transliterate } from 'utils'
import { baseUrl } from 'utils'
import { MENU } from '../../links'

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

  componentDidMount = () => {
    const { selected, title } = this.props
    if (selected === transliterate(title)) {
      this.goTop()
      this.handleClick()
    }
  }

  handleClick = event => {
    try {
      const { categories, index, getDishes } = this.props
      const { visible } = this.state
      event && event.preventDefault()
      this.setState({
        visible: categories[index].dishes && !visible,
        fetching: !categories[index].dishes
      })
      !categories[index].dishes && getDishes(categories[index].id)
    } catch (e) {
      console.error(e)
    }
  }

  dishesList = () => {
    const { categories, index } = this.props
    return categories[index].dishes ? categories[index].dishes.map(dish =>
      <Dish key={dish.id} {...dish} />
    ) : null
  }

  goTop = () => {
    const rect = this.refs.categtitle.getBoundingClientRect()
    const { body, documentElement } = document
    let scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop
    let clientTop = documentElement.clientTop || body.clientTop || 0
    window.scrollTo(0, rect.top + scrollTop - clientTop - 50)
  }

  render = () => {
    const { title, cookingTime } = this.props
    const { visible, fetching } = this.state
    return (
      <div>
        <div ref="categtitle" className="menu_cat_title">
          <div className="mcl"></div>
          <div className="mcr"></div>
          <div className="mctt" onClick={this.handleClick}>
            {fetching ? <div className="cwait" /> : null}
            <a href={baseUrl() + MENU.URL + '/' + transliterate(title)}>
              {title}
            </a>
          </div>
          <div className="mshade"></div>
        </div>
        <div className="cat_wrapper" style={visible ? null : { height: 0 }}>
          <div className="vrprig">Время приготовления<br />{cookingTime}</div>
          <div className="cat_content">
            {this.dishesList()}
            <div onClick={this.goTop} className="gtcat">Наверх к категории</div>
          </div>
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  index: PropTypes.number,
  categories: PropTypes.array.isRequired,
  getDishes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  cookingTime: PropTypes.string
}

const mapStateToProps = state => ({
  fetching: state.categories.fetching,
  categories: state.categories.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.menu,
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Category)
export default WrappedComponent
