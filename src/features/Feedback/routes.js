import React from 'react'
import * as components from './components'
import * as links from './links'
import { NotFound } from 'components'
 
const routes = [
  {
    path: links.FEEDBACK.URL,
    component: components.Layout,
    routes: [
      {
        path: links.FEEDBACK.URL,
        exact: true,
        component: components.Feedback,
      },
      {
        path: '*',
        component: () => <NotFound />
      }
    ]
  }
]

export default routes
