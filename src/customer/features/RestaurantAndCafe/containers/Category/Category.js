import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { Dish } from '../../components'
import * as actions from '../../actions'

const Category = ({ categories, index, title, cookingTime, getDishes }) => {

  const handleClick = event => {
    event.preventDefault()
    console.log(categories[index].dishes);
    !categories[index].dishes && getDishes(categories[index].id)
  }

  const dishesList = () =>
    categories[index].dishes ? categories[index].dishes.map(dish =>
      <Dish key={dish.id} {...dish} />
    ) : null



  return (
    <div>
      <div className="menu_cat_title" id="c_15">
        <div className="mcl"></div>
        <div className="mcr"></div>
        <div className="mctt">
          <a href="#" onClick={handleClick}>
            {title}
          </a>
        </div>
        <div className="mshade"></div>
      </div>
      <div className="cat_wrapper" style={{height: "281px"}}>
        <div className="vrprig">Время приготовления<br/>{cookingTime}</div>
        <div className="cat_content">

          { dishesList() }
          <a href="javascript:gtcat('c_15');" className="gtcat">Наверх к категории</a>
        </div>
      </div>
    </div>
  )
}

Category.propTypes = {
  index: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  getDishes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  cookingTime: PropTypes.string
}

const mapStateToProps = state => ({
  categories: state.restcafe.payload.categories
})

const mapDispathToProps = dispatch => bindActionCreators ({
  ...actions.menu
}, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Category)
