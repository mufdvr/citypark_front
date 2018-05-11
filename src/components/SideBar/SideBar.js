import React from 'react'

import { Delivery, NewsItem, News, RestaurantContacts,
   RoomsCatalog, RoomItem, HotelContacts } from 'components'

const DISPLAY_TYPE = "side"

export default () =>
<div className="column">

  <div className="header">
    <div className="h_img">
      <div className="h_column">
        <div className="leaf">
          <a href="http://cityparkvip.ru/" id="logo"></a>
          <div className="slogan">
            <a
              href="rest/restaurant.html"
              style={{borderBottom: "1px solid #46312a"}}
            >
            Ресторан
            </a>
            <a
              href="rest/kafe.html"
              style={{
                borderBottom: "1px solid #46312a",
                borderTop: "1px solid #ffe5d0"
              }}
            >
            Летнее кафе
            </a>
            <a
              href="hotel/"
              style={{
                borderTop: "1px solid #ffe5d0"
              }}
            >
            Отель-люкс
            </a>
          </div>
          <div className="h_title">
            <div className="h_title_bg" style={{backgroundPosition: "left"}}>
              <div className="r_grad" style={{height: "75px"}}>
                <div className="h_title_right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="partbody">
    <div className="shade">
      <RestaurantContacts displayType={DISPLAY_TYPE}/>
      <Delivery displayType={DISPLAY_TYPE}/>
      <News displayType={DISPLAY_TYPE}>
        <NewsItem
          displayType={DISPLAY_TYPE}
          bannerUrl={"/images/promo.jpg"}
          date={"09.04.2018"}
          title={"Конкурс селфи от City Park в Instagram"}
          link={"vdc"}
        />
      </News>

      <RoomsCatalog displayType={DISPLAY_TYPE}>
        <RoomItem
          displayType={DISPLAY_TYPE}
          title={"Одноместные номера"}
          cost={"2500-3000"}
          link={"hotel/katalog-nomerov/odnomestnyie.html"}
        />
        <RoomItem
          displayType={DISPLAY_TYPE}
          title={"Двухместные номера"}
          cost={"3000"}
          link={"hotel/katalog-nomerov/dvuxmestnyie-nomera.html"}
        />
        <RoomItem
          displayType={DISPLAY_TYPE}
          title={"VIP-номер"}
          cost={"5000"}
          link={"hotel/katalog-nomerov/vip.html"}
        />
      </RoomsCatalog>

      <HotelContacts displayType={DISPLAY_TYPE}/>

    </div>
  </div>

</div>
