import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { SocShare, Breadcrumbs } from 'components'
import { Category, Cart } from '../../containers'
import { REST_MAIN, MENU } from '../../links'
import * as actions from '../../actions'

class Menu extends React.Component {

  categoriesList = () => {
    const { categories } = this.props
    return categories ? categories.map((category, index) =>
      <Category
        key={category.id}
        index={index}
        title={category.title}
        cookingTime={category.cooking_time}
      />
    ) : null
  }

  componentDidMount = () => {
    const { fetching, getCategories } = this.props
    !fetching && getCategories()
  }

  render = () =>
    <div className="light restaraunt-menu">
      <Cart />
      <Breadcrumbs links={[ REST_MAIN, MENU ]} />
      <SocShare
        link="http://cityparkvip.ru/rest/kafe.html"
        title="РГК «City Park» - Летнее кафе"
        image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
      />
      <h2>
        <span>&nbsp;При заказе на вынос скидка с чека 10%!</span></h2>
      <h2>&nbsp;</h2>
      <h2>При заказе на сумму от 500 рублей доставка еды по Белореченску БЕСПЛАТНО.</h2>
      <h2>Заказы принимаются с 10:00 до 01:00 по телефону: 8-918-311-97-91.<br/>&nbsp;</h2>
      <h2>&nbsp;</h2>
      <h4>Доставка еды в Белореченске от ресторана City Park. 8-918-311-97-91. www.cityparkvip.ru</h4>
      <p>&nbsp;</p>
      <p></p>
      { this.categoriesList() }
      <div className="go_top">Наверх</div>
    </div>
}

const mapStateToProps = state => ({
  fetching: state.restcafe.fetching,
  categories: state.restcafe.payload.categories
})

const mapDispathToProps = dispatch => bindActionCreators({
  ...actions.menu
}, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(Menu)
