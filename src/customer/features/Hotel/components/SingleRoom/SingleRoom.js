import React from 'react'
import ReactFancyBox from 'react-fancybox'

import { SocShare, Breadcrumbs } from 'components'
import * as links from '../../links'
import * as images from './images'

export default () =>
  <div className="light">
    <Breadcrumbs links={[ links.HOTEL_MAIN, links.CATALOG, links.SINGLE_ROOM ]} />
    <SocShare
      link="http://cityparkvip.ru/rest/"
      title="РГК «City Park» - Ресторан и летнее кафе"
      image="http://cityparkvip.ru/assets/templates/citypark/site-preview.jpg"
    />

    <div className="room_info_block">
      <div className="room_preview_img">
        <ReactFancyBox
          className="gmg"
          thumbnail={images.single_room_preview}
          image={images.single_room}
        />
        <a href="/tour/room_1.html" target="_blank" className="tur_btn" style={{bottom: "5px", left: "5px"}}><span/></a>
      </div>
      <div className="room_summ" style={{position: "relative"}}><span className="summ">2500-3000</span> ₽/сутки</div>
      <div className="room_empty" style={{position: "relative", float: "left", marginTop: "10px"}}>
        <div className="re_num"></div>
        <div className="re_txt">Нет свободных номеров<br/>такого типа</div>
      </div>
    </div>

    <div className="room_text">
      <h1>Одноместные номера</h1>
      <h3><span>Одноместные номера в гостинице City Park в Белореченске — это отличный выбор для размещения в бизнес-командировке.</span></h3>
      <p><span>&nbsp;</span></p>
      <h3><span>201 — одноместный номер с двуспальной кроватью, с балконом. Площадь 23 кв.м. + балкон 7 кв.м.<br/></span>Стоимость 3000 руб./сутки.</h3>
      <h3><br/><span>204, 304 — одноместные номера с двуспальной кроватью. Площадь 19 кв.м.&nbsp;<br/>Стоимость 2500 руб./сутки.<br/></span></h3>
      <p><span>&nbsp;</span></p>
      <p><strong>Общая комплектация номеров:</strong><br/>•&nbsp;сплит-система;<br/>• Smart TV с функцией 3D;<br/>•&nbsp;сейф;<br/>•&nbsp;холодильник;<br/>•&nbsp;шкаф-гардероб;<br/>• прикроватные тумбы;&nbsp;<br/>•&nbsp;журнальный столик;<br/>•&nbsp;пуф;<br/>•&nbsp;комод;<br/>•&nbsp;внутренний
        телефон.<br/><br/><strong>Санузел:</strong>&nbsp;душевая кабинка, фен, туалетные принадлежности.</p>
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
      <p><span>&nbsp;</span></p>
    </div>
  </div>
