import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Delivery, NewsItem, News, RestaurantContacts,
   RoomsCatalog, HotelContacts } from 'components'

import RestaurantAndCafe from 'features/RestaurantAndCafe'
import Hotel from 'features/Hotel'

const DISPLAY_TYPE = "side"

class SideBar extends React.Component {

  render = () => {
    const { RESTAURANT, CAFE } = RestaurantAndCafe.links
    const { HOTEL_MAIN } = Hotel.links
    const { news, showDelivery, showNews, showRestaurantContacts, showHotelContacts, showRoomsCatalog } = this.props
    return (
      <div className="column">
        <div className="header">
          <div className="h_img">
            <div className="h_column">
              <div className="leaf">
                <Link to="/" id="logo" />
                <div className="slogan">
                  <Link to={RESTAURANT.URL} style={{borderBottom: "1px solid #46312a"}}>
                    {RESTAURANT.TITLE}
                  </Link>
                  <Link
                    to={CAFE.URL}
                    style={{
                      borderBottom: "1px solid #46312a",
                      borderTop: "1px solid #ffe5d0"
                    }}
                  >
                    {CAFE.TITLE}
                  </Link>
                  <Link to={HOTEL_MAIN.URL} style={{borderTop: "1px solid #ffe5d0"}}>
                    {HOTEL_MAIN.TITLE}
                  </Link>
                </div>
                <div className="h_title">
                  <div className="h_title_bg" style={{backgroundPosition: "left"}}>
                    <div className="r_grad" style={{height: "75px"}}>
                      <div className="h_title_right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partbody">
          <div className="shade">
            { showRestaurantContacts && RestaurantContacts({ displayType: DISPLAY_TYPE }) }
            { showDelivery ? <Delivery displayType={DISPLAY_TYPE} /> : null }
            {
              showNews ?
                <News displayType={DISPLAY_TYPE}>
                  { NewsItem({ displayType: DISPLAY_TYPE, ...news[0] }) }
                </News>
              : null
            }
            { showRoomsCatalog && RoomsCatalog({ displayType: DISPLAY_TYPE }) }
            { showHotelContacts && HotelContacts({ displayType: DISPLAY_TYPE }) }
          </div>
        </div>
      </div>
    )
  }
}

SideBar.defaultProps = {
  showNews: true,
  showDelivery: true,
  showRoomsCatalog: true,
  showHotelContacts: true,
  showRestaurantContacts: true
}

SideBar.propTypes = {
  showNews: PropTypes.bool,
  showDelivery: PropTypes.bool,
  showRoomsCatalog: PropTypes.bool,
  showHotelContacts: PropTypes.bool,
  showRestaurantContacts: PropTypes.bool
}

const mapStateToProps = state => ({
  news: state.news.payload
})

const ReduxWrapper = connect(mapStateToProps)
const WrappedComponent = ReduxWrapper(SideBar)
export default WrappedComponent
