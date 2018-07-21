import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { renderRoutes } from 'react-router-config'

import { Footer } from 'components'
import Personal from 'features/Personal'
import RestaurantAndCafe from 'features/RestaurantAndCafe'

class MainLayout extends React.Component {

  componentDidMount = () => {
    const { fetching_news, fetching_user, getUser, getNews } = this.props
    !fetching_news && getNews(3)
    !fetching_user && getUser()
  }

  render = () => {
    const { route } = this.props
    return (
      <div className="body">
        <div className="p1" />
        <div className="p2" />
        {route && renderRoutes(route.routes)}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetching_user: state.user.fetching,
  fetching_news: state.news.fetching
})

const mapDispatchToProps = dispath => bindActionCreators({
  getUser: Personal.actions.user.getUser,
  getNews: RestaurantAndCafe.actions.news.getNews
}, dispath)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(MainLayout)
export default WrappedComponent
