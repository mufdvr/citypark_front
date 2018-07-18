import React from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { TabSheet } from '../../components'
import { NavigationBar, SideBar } from 'containers'
import * as actions from '../../actions'
import * as types from '../../actionTypes'

class Layout extends React.Component {

  componentDidMount = () => this.props.getUser()

  render = () => {
    const { route, user, fetching } = this.props
    return (
      <div style={{lineHeight: "22px"}}>
      <div className="fold fold_pr" />
      <SideBar />
      <div className="content">
        <div className="partbody" style={{paddingTop: "70px"}}>
        {
          fetching === types.USER_SHOW ? null :
            user && user.id ? route && renderRoutes(route.routes) : <TabSheet />
        }
        </div>
      </div>
      <NavigationBar />
    </div>
    )
  }
}

  const mapStateToProps = state => ({
    user: state.user.payload,
    errors: state.user.errors,
    fetching: state.user.fetching
  })

  const mapDispatchToProps = dispatch => bindActionCreators ({
    ...actions.user
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
