import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import * as actions from '../../actions'
import { Breadcrumbs } from 'components'
import { ChefBlogDishItem } from '../../components'
import { REST_MAIN, CHEF_BLOG } from '../../links'
import { TITLE_PREFIX } from 'appConstants'

class ChefBlog extends React.Component {

  componentDidMount = () => {
    const { fetching, loaded, getBlogs } = this.props
    !fetching && !loaded && getBlogs()
    window.scrollTo(0, 0)
  }

  list = () => {
    const { blogs } = this.props
    return blogs.map(item => <ChefBlogDishItem key={item.id} {...item} />)
  }

  render = () => {
    return (
      <div className="light">
        <Helmet title={TITLE_PREFIX + CHEF_BLOG.TITLE} />
        { Breadcrumbs({links:  [ REST_MAIN, CHEF_BLOG ]}) }
        <h3>&nbsp;В блоге нашего шеф-повара Дениса Троицкого вы найдете лучшие рецепты блюд ресторана City Park, а также удивительные кулинарные секреты.<br/>
        &nbsp;Следите за обновлениями!</h3>
        <p>&nbsp;</p>
        {this.list()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, payload, loaded } = state.blogs
  return {
    fetching,
    blogs: payload,
    loaded,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.blogs
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(ChefBlog)
export default WrappedComponent
