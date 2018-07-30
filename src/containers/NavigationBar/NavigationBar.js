import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RestaurantAndCafe from 'features/RestaurantAndCafe'
import Hotel from 'features/Hotel'
import Contacts from 'features/Contacts'
import Personal from 'features/Personal'
import { buttonStyles } from './constants'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subMenuVisible: [
        false,
        false,
        false
      ],
      visible: false
    }
    this.isMobileView = window.innerWidth < 1100
  }

  handleTotgleVisible = () => 
    this.setState(prev => ({
      ...prev,
      visible: !prev.visible,
    }))

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
    const { visible } = this.state
    return (
      <div className="mainmenu">
        <div className="menubody">
        	<div className="l_grad"></div>
          <div className="r_grad"></div>
          <ul className="mmenu" style={ this.isMobileView ? {left: visible ? 0 : "-300px"} : {}}>
            <li>
              <Link to="/" className="first active">Главная</Link>
            </li>
            <li onMouseOver={() => this.handleHover(0)} onMouseOut={() => this.handleHover(0)}>
              <Link to={REST_MAIN.URL}>
                {REST_MAIN.TITLE}
              </Link>
              <ul className={`sub ${this.state.subMenuVisible[0] ? "fade-in" : "fade-out"}`}>
                <li>
                  <Link to={RESTAURANT.URL}>
                    {RESTAURANT.TITLE}
                  </Link>
                </li>
                <li>
                  <Link to={CAFE.URL}>
                    {CAFE.TITLE}
                  </Link>
                </li>
                <li>
                  <Link to={NEWS.URL}>
                    {NEWS.TITLE}
                  </Link>
                </li>
                <li>
                  <Link to={MENU.URL}>
                    {MENU.TITLE}
                  </Link>
                </li>
                <li>
                  <Link to={CHEF_BLOG.URL}>
                    {CHEF_BLOG.TITLE}
                  </Link>
                </li>
              </ul>
            </li>
            <li onMouseOver={() => this.handleHover(1)} onMouseOut={() => this.handleHover(1)}>
              <Link to={HOTEL_MAIN.URL}>
                {HOTEL_MAIN.TITLE}
              </Link>
              <ul className={`sub ${this.state.subMenuVisible[1] ? "fade-in" : "fade-out"}`}>
                <li>
                  <Link to={CATALOG.URL}>
                    {CATALOG.TITLE}
                  </Link>
                </li>
                <li>
                  <Link to={DOCUMENTATION.URL}>
                    {DOCUMENTATION.TITLE}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={CONTACTS.URL}>
                {CONTACTS.TITLE}
              </Link>
            </li>
            <li onMouseOver={() => this.handleHover(2)} onMouseOut={() => this.handleHover(2)}>
              <Link to={PERSONAL.URL}>
                { user && user.id ? user.name : PERSONAL.TITLE }
              </Link>
              {
                user && user.id ?
                  <ul className={`sub ${this.state.subMenuVisible[2] ? "fade-in" : "fade-out"}`}>
                    <li>
                      <Link to={FAVORITES.URL}>
                        {FAVORITES.TITLE}
                      </Link>
                    </li>
                    <li>
                      <Link to={ORDERS.URL}>
                        {ORDERS.TITLE}
                      </Link>
                    </li>
                    <li>
                      <a onClick={signOut}>Выход</a>
                    </li>
                  </ul>
                : null
              }
            </li>
    		    <div id="menu-btn" onClick={this.handleTotgleVisible}>
    			    <div id="mn1" style={ visible ? buttonStyles[2] : buttonStyles[0] }></div>
    			    <div id="mn2"></div>
    			    <div id="mn3" style={ visible ? buttonStyles[3] : buttonStyles[1] }></div>
    		    </div>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signOut: Personal.actions.user.signOut
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(NavigationBar)
export default WrappedComponent
