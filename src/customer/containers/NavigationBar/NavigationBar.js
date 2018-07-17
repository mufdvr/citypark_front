import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RestaurantAndCafe from 'features/RestaurantAndCafe'
import Hotel from 'features/Hotel'
import Contacts from 'features/Contacts'
import Personal from 'features/Personal'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subMenuVisible: [
        false,
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

  componentWillReceiveProps = (nextProps) => {
    const { user } = nextProps
    const { subMenuVisible } = this.state
    if (!(user && user.id)) this.setState(() =>
      subMenuVisible.splice(2, 1, false)
    )
  }

  render = () => {
    const { REST_MAIN, RESTAURANT, CAFE, MENU, NEWS, CHEF_BLOG } = RestaurantAndCafe.links
    const { HOTEL_MAIN, CATALOG, DOCUMENTATION } = Hotel.links
    const { CONTACTS } = Contacts.links
    const { PERSONAL, FAVORITES, ORDERS } = Personal.links
    const { user, signOut } = this.props
    return (
      <div className="mainmenu">
        <div className="menubody">
        	<div className="l_grad"></div>
          <div className="r_grad"></div>
          <ul className="mmenu">
            <li>
              <Link to="/" className="first active">Главная</Link>
            </li>
            <li onMouseOver={() => this.handleHover(0)} onMouseOut={() => this.handleHover(0)}>
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
                  <Link to={CHEF_BLOG.url}>
                    {CHEF_BLOG.title}
                  </Link>
                </li>
              </ul>
            </li>
            <li onMouseOver={() => this.handleHover(1)} onMouseOut={() => this.handleHover(1)}>
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
                  <Link to={DOCUMENTATION.url}>
                    {DOCUMENTATION.title}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={CONTACTS.url}>
                {CONTACTS.title}
              </Link>
            </li>
            <li onMouseOver={() => this.handleHover(2)} onMouseOut={() => this.handleHover(2)}>
              <Link to={PERSONAL.url}>
                { user && user.id ? user.name : PERSONAL.title }
              </Link>
              {
                user && user.id ?
                  <ul className={`sub ${this.state.subMenuVisible[2] ? "fade-in" : "fade-out"}`}>
                    <li>
                      <Link to={FAVORITES.url}>
                        {FAVORITES.title}
                      </Link>
                    </li>
                    <li>
                      <Link to={ORDERS.url}>
                        {ORDERS.title}
                      </Link>
                    </li>
                    <li>
                      <a onClick={signOut}>Выход</a>
                    </li>
                  </ul>
                : null
              }
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

const mapStateToProps = state => ({
  user: state.personal.payload.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signOut: Personal.actions.user.signOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
