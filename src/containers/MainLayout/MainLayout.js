import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { renderRoutes } from 'react-router-config'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

import { Footer } from 'components'
import { Personal, RestaurantAndCafe, Hotel } from 'features'

class MainLayout extends React.Component {

  componentDidMount = () => {
    const { fetchingNews, fetchingUser, getUser, getNews, fetchingRooms, getRooms } = this.props
    !fetchingNews && getNews(3)
    !fetchingUser && getUser()
    !fetchingRooms && getRooms()
  }

  render = () => {
    const { route, location: { pathname } } = this.props
    return (
      <div className="body">
        <NotificationContainer />
        <div className={ pathname === "/" ? 'p1' : 'p1 p_off'} />
        <div className={ pathname === "/" ? 'p2' : 'p2 p_off'} />
        { route && renderRoutes(route.routes) }
        { Footer() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetchingUser: state.user.fetching,
  fetchingNews: state.news.fetching,
  fetchingRooms: state.rooms.fetching
})

const mapDispatchToProps = dispath => bindActionCreators({
  getUser: Personal.actions.user.getUser,
  getNews: RestaurantAndCafe.actions.news.getNews,
  ...Hotel.actions
}, dispath)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(MainLayout)
export default WrappedComponent
