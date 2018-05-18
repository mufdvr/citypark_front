import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

const Category = ({ title, cookingTime }) =>
  <div>
    <div className="menu_cat_title" id="c_15">
      <div className="mcl"></div>
      <div className="mcr"></div>
      <div className="mctt">
        <a href="rest/menu/speczpredlozheniya/" data-action="getResources" data-tpl="row-menu-tpl" data-parents="15">
          {title}
        </a>
      </div>
      <div className="mshade"></div>
    </div>
    <div className="cat_wrapper" style={{height: "281px"}}>
      <div className="vrprig">Время приготовления<br/>{cookingTime}</div>
      <div className="cat_content">
        <a href="javascript:gtcat('c_15');" className="gtcat">Наверх к категории</a>
      </div>
    </div>
  </div>

Category.propTypes = {
  title: PropTypes.string.isRequired,
  cookingTime: PropTypes.string
}

export default Category
