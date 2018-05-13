import React from 'react'

import { SocShare, Breadcrumbs } from 'components'
import { Category } from './components'
import { MAIN, MENU } from '../../routes'

class Menu extends React.Component {

  render = () =>
    <div className="light restaraunt-menu">
      <Breadcrumbs links={[ MAIN, MENU ]} />
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
       <Category title="Спецпредложения" cookingTime="20—40 мин." />
      <div className="go_top">Наверх</div>
    </div>
}

export default Menu
