import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import * as images from 'images'
import { SocShare, Breadcrumbs } from 'components'
import { NewsItem } from '../../components'
import { REST_MAIN, NEWS } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

class News extends React.Component {

  componentDidMount = () => {
    const { fetching, loaded, getNews } = this.props
    !fetching && !loaded && getNews()
  }

  newslist = () => {
    const { news } = this.props
    return news.map(item => <NewsItem key={item.id} {...item} />)
  }

  render = () => {
    return (
      <div className="light">
        <Helmet title={TITLE_PREFIX + NEWS.TITLE} />
        { Breadcrumbs({links:  [ REST_MAIN, NEWS ]}) }
        <SocShare
          link={baseUrl() + NEWS.URL}
          title={TITLE_PREFIX + NEWS.TITLE}
          image={baseUrl() + images.sitePreview}
        />
        { this.newslist() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, payload } = state.news
  return {
    fetching,
    news: payload,
    loaded: !!payload.length
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.news
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(News)
export default WrappedComponent
