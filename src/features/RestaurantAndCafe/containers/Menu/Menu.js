import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs } from 'components'
import { Category } from '../../containers'
import { Cart } from 'features/Cart/containers'
import { REST_MAIN, MENU } from '../../links'
import * as actions from '../../actions'
import * as images from './images'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

class Menu extends React.Component {

  categoriesList = () => {
    const { categories } = this.props
    const { categoryTitle } = this.props.match.params
    return categories.map((category, index) =>
      <Category
        key={category.id}
        selected={categoryTitle}
        index={index}
        title={category.title}
        cookingTime={category.cooking_time}
      />
    )
  }
  componentDidMount = () => {
    const { fetching, getCategories, loaded } = this.props
    !fetching && !loaded && getCategories()
  }

  render = () => {
    return (
      <div className="light restaraunt-menu">
        <Helmet title={TITLE_PREFIX + MENU.TITLE} />
        <Cart />
        { Breadcrumbs({links:  [ REST_MAIN, MENU ]}) }
        <SocShare
          link={baseUrl() + MENU.URL}
          title={TITLE_PREFIX + MENU.TITLE}
          image={baseUrl() + images.menu}
        />
        <h2>
          <span>&nbsp;При заказе на вынос скидка с чека 10%!</span></h2>
        <h2>&nbsp;</h2>
        <h2>При заказе на сумму от 500 рублей доставка еды по Белореченску БЕСПЛАТНО.</h2>
        <h2>Заказы принимаются с 10:30 до 00:30 по телефону: <a href="tel:+79183119791">8-918-311-97-91</a>.<br/>&nbsp;</h2>
        <h2>&nbsp;</h2>
        <h4>Доставка еды в Белореченске от ресторана City Park. <a href="tel:+79183119791">8-918-311-97-91</a>. <a target="_blank" rel="noopener noreferrer" href="https://cityparkvip.ru">www.cityparkvip.ru</a></h4>
        <p>&nbsp;</p>
        <p></p>
        { this.categoriesList() }
        <div className="go_top">Наверх</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, payload } = state.categories
  return {
    fetching,
    categories: payload,
    loaded: !!payload.length
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.menu
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Menu)
export default WrappedComponent
