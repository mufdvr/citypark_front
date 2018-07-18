import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { SocShare, Breadcrumbs } from 'components'
import { NewsItem } from '../../components'
import { REST_MAIN, NEWS } from '../../links'

class News extends React.Component {

  componentDidMount = () => {
    const { fetching, getNews } = this.props
    !fetching && getNews()
  }

  newslist = () => {
    const { news } = this.props
    return news.map(item => <NewsItem key={item.id} {...item} />)
  }

  render = () => {
    return (
      <div className="light">
        <Breadcrumbs links={[ REST_MAIN, NEWS ]} />
        <SocShare
          link="http://cityparkvip.ru/rest/kafe.html"
          title="РГК «City Park» - Летнее кафе"
          image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
        />
        { this.newslist() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.payload,
  fetching: state.news.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.news
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(News)
