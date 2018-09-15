import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { renderRoutes } from 'react-router-config'

import { Footer } from 'components'
import { Personal, RestaurantAndCafe, Hotel } from 'features'

class MainLayout extends React.Component {

  componentDidMount = () => {
    const { fetching_news, fetching_user, getUser, getNews, fetching_rooms, getRooms } = this.props
    !fetching_news && getNews(3)
    !fetching_user && getUser()
    //!fetching_rooms && getRooms()
  }

  render = () => {
    const { route, location: { pathname } } = this.props
    return (
      <div className="body">
        <div className={ pathname === "/" ? 'p1' : 'p1 p_off'} />
        <div className={ pathname === "/" ? 'p2' : 'p2 p_off'} />
        { route && renderRoutes(route.routes) }
        { Footer() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetching_user: state.user.fetching,
  fetching_news: state.news.fetching,
  fetching_rooms: state.rooms.fetching
})

const mapDispatchToProps = dispath => bindActionCreators({
  getUser: Personal.actions.user.getUser,
  getNews: RestaurantAndCafe.actions.news.getNews,
  ...Hotel.actions
}, dispath)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(MainLayout)
export default WrappedComponent
