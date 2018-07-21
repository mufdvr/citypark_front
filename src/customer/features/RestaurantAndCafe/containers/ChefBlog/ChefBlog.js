import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import { Breadcrumbs } from 'components'
import { ChefBlogDishItem } from '../../components'
import { REST_MAIN, CHEF_BLOG } from '../../links'

class ChefBlog extends React.Component {

  componentDidMount = () => {
    const { fetching, blogs, getBlogs } = this.props
    !fetching && !blogs.length && getBlogs()
  }

  list = () => {
    const { blogs } = this.props
    return blogs.map(item => <ChefBlogDishItem key={item.id} {...item} />)
  }

  render = () => {
    return (
      <div className="light">
        <Breadcrumbs links={[ REST_MAIN, CHEF_BLOG ]} />
        <h3>&nbsp;В блоге нашего шеф-повара Дениса Троицкого вы найдете лучшие рецепты блюд ресторана City Park, а также удивительные кулинарные секреты.<br/>
        &nbsp;Следите за обновлениями!</h3>
        <p>&nbsp;</p>
        {this.list()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.payload,
  fetching: state.blogs.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.blogs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChefBlog)
