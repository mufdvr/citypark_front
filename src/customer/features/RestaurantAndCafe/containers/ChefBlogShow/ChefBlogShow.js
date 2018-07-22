import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { Breadcrumbs, SocShare, PhotoGallery } from 'components'
import { REST_MAIN, CHEF_BLOG } from '../../links'

class ChefBlogShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showBlogs, selectBlogs, blogs, match: { params } } = this.props
    const id = Number(params.id)
    blogs.length && blogs.find(blog => blog.id === id).body ? selectBlogs(id) : !fetching && showBlogs(id)
  }

  xss = target => {   //незабываем фильтровать <script> на бэке
    const { body } = this.props.blogsitem
    if (target && body) target.innerHTML = body
  }

  render = () => {
    if (!this.props.blogsitem.body) return <div />
    const { REACT_APP_BACK_ROOT } = process.env
    const { title, created_at, image, gallery } = this.props.blogsitem
    return (
      <div className="light">
        <Breadcrumbs links={[ REST_MAIN, CHEF_BLOG, {title} ]} />
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
          <div key={Math.random()} ref={this.xss} />
          {
            gallery ?
              <PhotoGallery items={
                gallery.map(item => ({
                  image: REACT_APP_BACK_ROOT + item.image,
                  thumb: REACT_APP_BACK_ROOT + item.thumb
                }))
              } />
            : null
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, payload, blogsitem } = state.blogs
  return {
    blogs: payload,
    blogsitem,
    fetching
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.blogs
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(ChefBlogShow)
export default WrappedComponent
