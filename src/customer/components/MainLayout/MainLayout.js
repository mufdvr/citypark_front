import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { renderRoutes } from 'react-router-config'

import { Footer } from 'components'
import Personal from 'features/Personal'

class MainLayout extends React.Component {

  componentDidMount = () => {
    const { fetching, getUser } = this.props
    !fetching && getUser()
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
  fetching: state.user.fetching
})

const mapDispatchToProps = dispath => bindActionCreators({
  getUser: Personal.actions.auth.getUser
}, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
