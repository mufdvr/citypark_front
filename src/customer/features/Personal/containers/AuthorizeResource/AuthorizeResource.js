import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { TabSheet } from '../../components'
import * as actions from '../../actions'

class AuthorizeResource extends React.Component {

  componentDidMount = () =>
    this.props.getUser()

  render = () => {
    const { user, children, fetching } = this.props
    return fetching ? null :
      user.id ? children : <TabSheet />
  }
}

const mapStateToProps = state => ({
  user: state.user.payload.user,
  errors: state.user.errors,
  fetching: state.user.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  ...actions.auth
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizeResource);
