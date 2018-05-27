import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'

class NewsShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showNews, match: { params } } = this.props
    console.log(this.props);
    !fetching && showNews(params.id)
  }

  render = () => {
    return (
      <div className="light">
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newsItem: state.restcafe.payload.news,
  fetching: state.restcafe.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.news
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow)
