import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import * as actions from '../../actions'
import { Breadcrumbs, SocShare, PhotoGallery } from 'components'
import { REST_MAIN, CHEF_BLOG } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

class ChefBlogShow extends React.Component {

  componentDidMount = () => {
    const { fetching, showBlogs, selectBlogs, blogs, match: { params } } = this.props
    const id = Number(params.id)
    blogs.length && blogs.find(blog => blog.id === id).body ? selectBlogs(id) : !fetching && showBlogs(id)
    window.scrollTo(0, 0)
  }

  xss = target => {   //незабываем фильтровать <script> на бэке
    const { body } = this.props.blogsitem
    if (target && body) target.innerHTML = body
  }

  render = () => {
    if (!this.props.blogsitem.body) return <div />
    const { blogsitem: { title, created_at, image, gallery }, match: { params } } = this.props
    return (
      <div className="light">
        <Helmet title={ TITLE_PREFIX + title } />
        { Breadcrumbs({links:  [ REST_MAIN, CHEF_BLOG, {TITLE: title} ]}) }
        <SocShare
          link={ baseUrl() + CHEF_BLOG.URL + '/' + params.id }
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
