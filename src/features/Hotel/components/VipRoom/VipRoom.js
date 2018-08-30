import React from 'react'
import ReactFancyBox from 'react-fancybox'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs, PhotoGallery } from 'components'
import { HOTEL_MAIN, CATALOG, VIP_ROOM } from '../../links'
import * as images from './images'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

export default () =>
  <div className="light">
    <Helmet title={ TITLE_PREFIX + VIP_ROOM.TITLE } />
    { Breadcrumbs({links:  [ HOTEL_MAIN, CATALOG, VIP_ROOM ]}) }
    <SocShare
      link={baseUrl() + VIP_ROOM.URL}
      title={TITLE_PREFIX + VIP_ROOM.TITLE}
      image={baseUrl() + "/files/images/vip_room.jpg"}
    />
    <div className="room_info_block">
      <div className="room_preview_img">
        <ReactFancyBox
          className="gmg"
          thumbnail={images.vip_room_preview}
          image={images.vip_room}
        />
        <a href="/tour/vip_1.html" target="_blank" className="tur_btn" style={{bottom: "5px", left: "5px"}}><span/></a>
      </div>
      <div className="room_summ" style={{position: "relative"}}><span className="summ">5000</span> ₽/сутки</div>
      <div className="room_empty" style={{position: "relative", float: "left", marginTop: "10px"}}>
        <div className="re_num"></div>
        <div className="re_txt">Нет свободных номеров<br/>такого типа</div>
      </div>
    </div>
    <div className="room_text">
      <h1>VIP-номер</h1>
      <h3><span style={{fontSize: "1.17em", lineHeight: "1.5em"}}>VIP-номер в гостинице City Park в Белореченске порадует вас простором и комфортом.</span></h3>
      <h3>Двухкомнатный номер с балконом. Площадь 45кв.м. + балкон 7кв.м.</h3>
      <p><br/><strong>1-я комната — гостиная.</strong><br/><strong>Комплектация:</strong> <br/>• диван-кровать;<br/>•&nbsp;камин электрический;<br/>•&nbsp;сплит-система;<br/>• Smart TV с функцией 3D;<br/>•&nbsp;рабочий стол;<br/>•&nbsp;кресло;<br/>•&nbsp;журнальный
        столик;<br/>•&nbsp;пуфы.</p>
      <p><strong style={{lineHeight: "1.5em"}}>&nbsp;</strong></p>
      <p><strong style={{lineHeight: "1.5em"}}>2-я комната — спальня.</strong></p>
      <p><strong>Комплектация:</strong> <br/>•&nbsp;двуспальная кровать;<br/>•&nbsp;прикроватные тумбы;<br/>•&nbsp;сплит-система;<br/>• Smart TV с функцией 3D;<br/>•&nbsp;шкаф-гардероб;<br/>•&nbsp;комод;<br/>•&nbsp;сейф;<br/>•&nbsp;холодильник;<br/>•&nbsp;журнальный
        столик;<br/>•&nbsp;внутренний телефон.</p>
      <p>&nbsp;</p>
      <p><strong>Санузел:</strong>&nbsp;душевая кабинка, фен, туалетные принадлежности.</p>
      <p>&nbsp;</p>
      <p><strong>На всей территории РГК City Park доступен бесплатный&nbsp;Wi-fi&nbsp;</strong></p>
      <h3>Дополнительные услуги:</h3>
      <p>• заказ завтрака в номер (стоимость завтрака не входит в стоимость номера);<br/>•&nbsp;заказ еды из ресторана City Park;<br/>•&nbsp;детская кровать до 3-х лет.<br/>•&nbsp;услуги прачечной и глажки (платно).</p>
      <p>&nbsp;</p>
      <h3>Правила размещения:</h3>
      <p>Номер VIP – не более четырех гостей, в остальные номера – не более двух.<br/>Заселение производится по паспорту или водительскому удостоверению.&nbsp;<br/>Оплатить можно как наличными, так и банковской картой.<br/>За бронирование плата не взимается.<br/><strong>Заезд с животными запрещен.<br/></strong><strong>Курение в помещениях РГК City Park запрещено, штраф 500 руб. Место для курения есть на каждом этаже.</strong></p>
      <p><strong>&nbsp;</strong></p>
      <h4>Забрнировать номер в гостинице City Park можно по телефонам: +7-918-311-97-10, 8-800-100-24-41 (звонок по России бесплатный) или по городскому номеру 8 (86155) 3-30-02.</h4>
      <p><strong>&nbsp;</strong></p>
    </div>
    <PhotoGallery
      items={[
        {
          thumb: images.thumb1,
          image: images.image1
        },
        {
          thumb: images.thumb2,
          image: images.image2
        },
        {
          thumb: images.thumb3,
          image: images.image3
        }
      ]}
    />
  </div>
