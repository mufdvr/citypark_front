import React from 'react'

import { RoomItem, RestaurantContacts, Delivery, Header, HotelContacts,
  RoomsCatalog, NewsItem, News } from 'components'

const DISPLAY_TYPE = "home"

export default () =>
  <div>
    <div className="part">
      <Header
        side={"left"}
        title={"Ресторан и летнее кафе"}
        link={"/rest"}
        backgroundImage={"/images/header/left.jpg"}
      />
      <div className="partbody partbody_home" style={{float: "right"}}>
        <div className="light">
          <Delivery displayType={DISPLAY_TYPE} />
          <News displayType={DISPLAY_TYPE}>
            <NewsItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/promo.jpg"}
              title={"Конкурс селфи от City Park в Instagram"}
              date={"09.04.2018"}
              link={"/rest/news/konkurs-selfi-ot-city-park-v-instagram.html"}
            />
            <NewsItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/wVS7mwYjCyw.jpg"}
              title={"Новое спецпредложение"}
              date={"05.04.2018"}
              link={"/rest/news/novoe-speczpredlozhenie.html"}
            />
            <NewsItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/DSC_0063.JPG"}
              title={"Новое спецпредложение"}
              date={"Бонусная карта от CityPark"}
              link={"rest/news/bonusnaya-karta-ot-citypark.html"}
            />
          </News>
          <RestaurantContacts displayType={DISPLAY_TYPE}/>
        </div>
      </div>
    </div>

    <div className="part">
      <Header
        side={"right"}
        title={"Отель-люкс"}
        link={"/hotel"}
        backgroundImage={"/images/header/right.jpg"}
      />
      <div className="partbody">
        <div className="shade">
          <RoomsCatalog displayType={DISPLAY_TYPE}>
            <RoomItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/hotel/N9dGCus1wbk.jpg"}
              title={"Одноместные номера"}
              cost={"2500-3000"}
              link={"hotel/katalog-nomerov/odnomestnyie.html"}
              description={"Одноместные номера с двуспальной кроватью."}
            />
            <RoomItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/hotel/bIGFdJb25nk.jpg"}
              title={"Двухместные номера"}
              cost={"3000"}
              link={"hotel/katalog-nomerov/dvuxmestnyie-nomera.html"}
              description={"Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью \"Евро\""}
            />
            <RoomItem
              displayType={DISPLAY_TYPE}
              bannerUrl={"/images/hotel/YMOwM0GE5aw.jpg"}
              title={"VIP-номер"}
              cost={"5000"}
              link={"hotel/katalog-nomerov/vip.html"}
              description={"Двухкомнатный номер (гостиная + спальня) с балконом."}
            />
          </RoomsCatalog>
          <div className="ost_rooms">
            <div className="rn">1</div>
            <div className="rntxt">свободный<br/>номер</div>
            <div className="ost_end"></div>
          </div>
          <HotelContacts displayType={DISPLAY_TYPE}/>
        </div>
      </div>
    </div>
    <div className="logo" />
  </div>
