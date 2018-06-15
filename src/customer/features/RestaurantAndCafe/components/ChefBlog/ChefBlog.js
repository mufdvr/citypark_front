import React from 'react'
import { Breadcrumbs } from 'components'
import { ChefBlogDishItem } from '../../components'
import { REST_MAIN, CHEF_BLOG } from '../../links'
import content from './content'

export default () => {
  const list = () =>
    content ? content.map(item => <ChefBlogDishItem {...item} />) : null

  return (
    <div className="light">
      <Breadcrumbs links={[ REST_MAIN, CHEF_BLOG ]} />
      <h3>&nbsp;В блоге нашего шеф-повара Дениса Троицкого вы найдете лучшие рецепты блюд ресторана City Park, а также удивительные кулинарные секреты.<br/>
      &nbsp;Следите за обновлениями!</h3>
      <p>&nbsp;</p>
      {list()}
    </div>
  )
}
