import React from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PERSONAL } from '../../links'
import { Header } from 'components'
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
        <div className="partbody" style={{paddingTop: "150px"}}>
        {
          fetching === types.USER ? null :
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
    user: state.personal.payload.user,
    errors: state.personal.errors,
    fetching: state.personal.fetching
  })

  const mapDispatchToProps = dispatch => bindActionCreators ({
    ...actions.auth
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
