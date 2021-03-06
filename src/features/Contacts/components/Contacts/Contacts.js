import React from 'react'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs } from 'components'
import * as images from './images'
import * as commonImages from 'images'
import { CONTACTS } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

export default () =>
	<div className="light">
	  <Helmet title={TITLE_PREFIX + CONTACTS.TITLE} />
		{ Breadcrumbs({links:  [ CONTACTS ]}) }
		<SocShare
      link={baseUrl() + CONTACTS.URL}
      title={TITLE_PREFIX + CONTACTS.TITLE}
      image={baseUrl() + commonImages.citypark}
    />
		<h1>Ресторанно-гостиничный комплекс City Park</h1>
	  <h1><img src={images.fasad} alt="fasad" width="450" height="300" /></h1>
	  <h1>Адрес:</h1>
	  <h3>352630, Краснодарский край, г. Белореченск, ул. Гоголя, 61.</h3>
	  <p><br/><br/></p>
	  <h1>Телефоны:</h1>
	  <h3>8-800-100-24-41 (звонок по России бесплатный)<br/>+7-918-311-97-91 - ресторан<br/>+7-918-311-97-10 - гостиница</h3>
	  <p>&nbsp;</p>
	  <h1>Соц. сети:</h1>
	  <h3>
		  ВК: <a href="https://vk.com/cityparkvip">vk.com/cityparkvip</a><br/>
			ОК: <a href="https://ok.ru/cityparkvip">ok.ru/cityparkvip</a><br/>
			Instagram: <a href="https://www.instagram.com/cityparkvipru/">cityparkvipru</a><br/><br/>
		</h3>
	  <p>&nbsp;</p>
	  <h3>e-mail: belcitypark@mail.ru<span><br/></span></h3>
	  <p>&nbsp;</p>
	</div>
