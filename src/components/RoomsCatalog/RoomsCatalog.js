import React from 'react'
import RoomItem from '../RoomItem'

export default () =>
  <div className="room_catalog">
    <div className="news_title">
      <a href="hotel/katalog-nomerov/">Каталог номеров</a>
    </div>

    <RoomItem
      bannerUrl={"/images/hotel/N9dGCus1wbk.jpg"}
      title={"Одноместные номера"}
      cost={"2500-3000"}
      link={"hotel/katalog-nomerov/odnomestnyie.html"}
      description={"Одноместные номера с двуспальной кроватью."}
    />

    <RoomItem
      bannerUrl={"/images/hotel/bIGFdJb25nk.jpg"}
      title={"Двухместные номера"}
      cost={"3000"}
      link={"hotel/katalog-nomerov/dvuxmestnyie-nomera.html"}
      description={"Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью \"Евро\""}
    />

    <RoomItem
      bannerUrl={"/images/hotel/YMOwM0GE5aw.jpg"}
      title={"VIP-номер"}
      cost={"5000"}
      link={"hotel/katalog-nomerov/vip.html"}
      description={"Двухкомнатный номер (гостиная + спальня) с балконом."}
    />

    <div className="ost_rooms">
      <div className="rn">1</div>
      <div className="rntxt">свободный<br/>номер</div>
      <div className="ost_end"></div>
    </div>
  </div>
