import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { Breadcrumbs, SocShare } from 'components'
import { REST_MAIN, NEWS } from '../../links'

class NewsShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showNews, selectNews, news, match: { params } } = this.props
    const id = Number(params.id)
    news.length && news.find(news => news.id === id).body ? selectNews(id) : !fetching && showNews(id)
  }

  xss = target => {   //незабываем фильтровать <script> на бэке
    const { body } = this.props.newsitem
    if (target && body) target.innerHTML = body
  }

  render = () => {
    if (!this.props.newsitem.body) return <div />
    const { title, created_at, image } = this.props.newsitem
    return (
      <div className="light">
        { Breadcrumbs({links:  [ REST_MAIN, NEWS, {title} ]}) }
        <SocShare
          link="http://cityparkvip.ru/rest/kafe.html"
          title="РГК «City Park» - Летнее кафе"
          image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
        />
        <div className="page_date">{created_at}</div>
        <div className="page_img">
        	<img src={image} alt="pic" />
        </div>
        <h1>{title}</h1>
        <div key={Math.random()} ref={this.xss} />
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
