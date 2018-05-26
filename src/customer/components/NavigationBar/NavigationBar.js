import React from 'react'
import { Link } from 'react-router-dom'

import RestaurantAndCafe from 'features/RestaurantAndCafe'
import Hotel from 'features/Hotel'

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subMenuVisible: [
        false,
        false
      ]
    }
  }

  handleHover = (id) => {
    const { subMenuVisible } = this.state
    this.setState(() =>
      subMenuVisible.splice(id, 1, !subMenuVisible[id])
    )
  }

  render = () => {
    const { REST_MAIN, RESTAURANT, CAFE, MENU, NEWS } = RestaurantAndCafe.links
    const { HOTEL_MAIN, CATALOG } = Hotel.links
    return (
      <div className="mainmenu">
        <div className="menubody">
        	<div className="l_grad"></div>
          <div className="r_grad"></div>
          <ul className="mmenu">
            <li>
              <Link to="/" className="first active">Главная</Link>
            </li>
            <li onMouseOver={this.handleHover.bind(null, 0)} onMouseOut={this.handleHover.bind(null, 0)}>
              <Link to={REST_MAIN.url}>
                {REST_MAIN.title}
              </Link>
              <ul className={`sub ${this.state.subMenuVisible[0] ? "fade-in" : "fade-out"}`}>
                <li>
                  <Link to={RESTAURANT.url}>
                    {RESTAURANT.title}
                  </Link>
                </li>
                <li>
                  <Link to={CAFE.url}>
                    {CAFE.title}
                  </Link>
                </li>
                <li>
                  <Link to={NEWS.url}>
                    {NEWS.title}
                  </Link>
                </li>
                <li>
                  <Link to={MENU.url}>
                    {MENU.title}
                  </Link>
                </li>
                <li>
                  <a href="rest/shefblog/" className="last">Блог шеф-повара</a>
                </li>
              </ul>
            </li>
            <li onMouseOver={this.handleHover.bind(null, 1)} onMouseOut={this.handleHover.bind(null, 1)}>
              <Link to={HOTEL_MAIN.url}>
                {HOTEL_MAIN.title}
              </Link>
              <ul className={`sub ${this.state.subMenuVisible[1] ? "fade-in" : "fade-out"}`}>
                <li>
                  <Link to={CATALOG.url}>
                    {CATALOG.title}
                  </Link>
                </li>
                <li>
                  <a href="hotel/test0.html" className="last">Документация</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contacts.html" className="last">Контакты</a>
            </li>
    		    <div id="menu-btn">
    			    <div id="mn1"></div>
    			    <div id="mn2"></div>
    			    <div id="mn3"></div>
    		    </div>
          </ul>
        </div>
      </div>
    )
  }
}
