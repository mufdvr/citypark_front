import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { Breadcrumbs, SocShare } from 'components'
import { REST_MAIN, NEWS } from '../../links'

class NewsShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showNews, match: { params } } = this.props
    !fetching && showNews(params.id)
  }

  xss = target => {   //незабываем фильтровать <script> на бэке
    const { body } = this.props.newsitem
    if (target && body) target.innerHTML = body
  }

  render = () => {
    if (!this.props.newsitem) return <div />
    const { title, created_at, image } = this.props.newsitem
    return (
      <div className="light">
        <Breadcrumbs links={[ REST_MAIN, NEWS, {title} ]} />
          <SocShare
            link="http://cityparkvip.ru/rest/kafe.html"
            title="РГК «City Park» - Летнее кафе"
            image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
          />
          <div className="page_date">{created_at}</div>
          <div className="page_img">
          	<img src={process.env.REACT_APP_BACK_ROOT + image} alt="pic" />
          </div>
          <h1>{title}</h1>
          <div ref={this.xss} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newsitem: state.newsitem.payload,
  fetching: state.newsitem.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.news
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow)
