import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import * as actions from '../../actions'
import { Breadcrumbs, SocShare, PhotoGallery } from 'components'
import { REST_MAIN, NEWS } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

class NewsShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showNews, selectNews, news, match: { params } } = this.props
    const id = Number(params.id)
    news.length && news.find(news => news.id === id).body ? selectNews(id) : !fetching && showNews(id)
    window.scrollTo(0, 0)
  }

  xss = target => {   //незабываем фильтровать <script> на бэке
    const { body } = this.props.newsitem
    if (target && body) target.innerHTML = body
  }

  render = () => {
    if (!this.props.newsitem.body) return <div />
    const { newsitem: { title, created_at, image, gallery }, match: { params } } = this.props
    return (
      <div className="light">
        <Helmet title={ TITLE_PREFIX + title } />
        { Breadcrumbs({links:  [ REST_MAIN, NEWS, {TITLE: title} ]}) }
        <SocShare
          link={ baseUrl() + NEWS.URL + '/' + params.id }
          title={ TITLE_PREFIX + title }
          image={ baseUrl() + image }
        />
        <div className="page_date">{created_at}</div>
        <div className="page_img">
        	<img src={image} alt="pic" />
        </div>
        <h1>{title}</h1>
        <div key={Math.random()} ref={this.xss} />
        {
          gallery ?
            <PhotoGallery items={
              gallery.map(item => ({
                image: item.image,
                thumb: item.thumb
              }))
            } />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { newsitem, payload, fetching } = state.news
  return {
    news: payload,
    fetching,
    newsitem
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.news
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(NewsShow)
export default WrappedComponent
