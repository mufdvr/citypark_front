import React from 'react'

import { SocShare, Breadcrumbs } from 'components'
import * as images from './images'
import { CONTACTS } from '../../links'

export default () =>
	<div className="light">
		{ Breadcrumbs({links:  [ CONTACTS ]}) }
		<SocShare
			link="http://cityparkvip.ru/rest/"
			title="РГК «City Park» - Ресторан и летнее кафе"
			image="http://cityparkvip.ru/assets/templates/citypark/site-preview.jpg"
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
		  ВК: <a href="http://vk.com/cityparkvip">vk.com/cityparkvip</a><br/>
			ОК: <a href="http://ok.ru/cityparkvip">ok.ru/cityparkvip</a><br/>
			Instagram: <a href="https://www.instagram.com/cityparkvipru/">cityparkvipru</a><br/><br/>
		</h3>
	  <p>&nbsp;</p>
	  <h3>e-mail: belcitypark@mail.ru<span><br/></span></h3>
	  <p>&nbsp;</p>
	</div>
