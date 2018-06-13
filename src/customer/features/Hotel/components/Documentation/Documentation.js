import React from 'react'

import { PhotoGallery, SocShare, Breadcrumbs } from 'components'
import { HOTEL_MAIN, DOCUMENTATION } from '../../routes'
import * as images from './images'

export default () =>
  <div className="light">
    <Breadcrumbs links={[ HOTEL_MAIN, DOCUMENTATION ]} />
    <SocShare
      link="http://cityparkvip.ru/rest/"
      title="РГК «City Park» - Ресторан и летнее кафе"
      image="http://cityparkvip.ru/assets/templates/citypark/site-preview.jpg"
    />
  	<p>Политика ООО "Олимп" в отношении обработки персональных данных&nbsp;</p>
    <PhotoGallery
      items={[
        {
          thumb: images.t1,
          image: images.f1
        },
        {
          thumb: images.t2,
          image: images.f2
        },
        {
          thumb: images.t3,
          image: images.f3
        },
        {
          thumb: images.t4,
          image: images.f4
        },
        {
          thumb: images.t5,
          image: images.f5
        },
        {
          thumb: images.t6,
          image: images.f6
        },
        {
          thumb: images.t7,
          image: images.f7
        },
        {
          thumb: images.t8,
          image: images.f8
        },
      ]}
    />
  </div>
