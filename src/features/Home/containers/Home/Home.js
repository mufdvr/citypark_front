import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { RestaurantContacts, Delivery, Header, HotelContacts,
  RoomsCatalog, NewsItem, News, Chef } from 'components'
import { NavigationBar } from 'containers'
import { RestaurantAndCafe, Hotel } from 'features'
import { TITLE_PREFIX } from 'appConstants'

const DISPLAY_TYPE = "home"

class Home extends React.Component {

  newslist = () => {
    const { news } = this.props
    return news.map(item => <NewsItem key={item.id} displayType={DISPLAY_TYPE} {...item} />)
  }

  freeRoomsText = roomsCount => {
    switch (roomsCount) {
      case 0:
        return <span>Нет свободных<br/>номеров</span>
      case 1:
        return <span>cвободный<br/>номер</span>
      case 2:
      case 3:
      case 4:
        return <span>свободных<br/>номера</span>
      default:
        return <span>свободных<br/>номеров</span>
    }
  }  

  freeRooms = () => {
    const { rooms } = this.props
    if (Object.keys(rooms).length === 0) return null
    const free_rooms = Object.values(rooms).reduce((count, room) => count + room)
    return (
      <div className="ost_rooms_home">
        <div className="rn">{free_rooms ? free_rooms : null}</div>
        <div className="rntxt">{this.freeRoomsText(free_rooms)}</div>
        <div className="ost_end"></div>
      </div>
    )
  }

  render = () => {
    const { REST_MAIN } = RestaurantAndCafe.links
    const { HOTEL_MAIN } = Hotel.links
    return (
      <div>
        <Helmet title={TITLE_PREFIX + "Главная"} />
        <div className="fold fold_home" />
        <div className="part">
          { Header({
            side: "left",
            title: REST_MAIN.TITLE,
            link: REST_MAIN.URL
          })}
          <div className="partbody partbody_home" style={{float: "right"}}>
            <div className="light">
              { Delivery({ displayType: DISPLAY_TYPE }) }
              <News displayType={DISPLAY_TYPE}>
                { this.newslist() }
              </News>
              { RestaurantContacts({ displayType: DISPLAY_TYPE }) }
            </div>
          </div>
        </div>

        <div className="part">
          { Header({
            side: "right",
            title: HOTEL_MAIN.TITLE,
            link: HOTEL_MAIN.URL
          })}
          <div className="partbody">
            <div className="shade">
              <RoomsCatalog displayType={DISPLAY_TYPE} />
              { this.freeRooms() }
              { HotelContacts({ displayType: DISPLAY_TYPE }) }
            </div>
          </div>
        </div>
        <div className="logo" />
        { Chef() }
        <NavigationBar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.payload,
  rooms: state.rooms.payload
})

const ReduxWrapper = connect(mapStateToProps)
const WrappedComponent = ReduxWrapper(Home)
export default WrappedComponent
