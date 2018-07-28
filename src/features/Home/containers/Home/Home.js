import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { RestaurantContacts, Delivery, Header, HotelContacts,
  RoomsCatalog, NewsItem, News, Chef } from 'components'
import { NavigationBar } from 'containers'
import { RestaurantAndCafe, Hotel } from 'features'

const DISPLAY_TYPE = "home"

class Home extends React.Component {

  newslist = () => {
    const { news } = this.props
    return news.map(item => <NewsItem key={item.id} displayType={DISPLAY_TYPE} {...item} />)
  }

  render = () => {
    const { REST_MAIN } = RestaurantAndCafe.links
    const { HOTEL_MAIN } = Hotel.links
    const { REACT_APP_TITLE_PREFIX } = process.env
    return (
      <div>
        <Helmet title={REACT_APP_TITLE_PREFIX + "Главная"} />
        <div className="fold fold_home" />
        <div className="part">
          { Header({
            side: "left",
            title: REST_MAIN.title,
            link: REST_MAIN.url
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
            title: HOTEL_MAIN.title,
            link: HOTEL_MAIN.url
          })}
          <div className="partbody">
            <div className="shade">
              <RoomsCatalog displayType={DISPLAY_TYPE} />
              <div className="ost_rooms">
                <div className="rn">1</div>
                <div className="rntxt">свободный<br/>номер</div>
                <div className="ost_end"></div>
              </div>
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
})

const ReduxWrapper = connect(mapStateToProps)
const WrappedComponent = ReduxWrapper(Home)
export default WrappedComponent
