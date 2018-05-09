import React from 'react'
import NewsItem from '../NewsItem'

export default () =>
  <div className="news_block">
    <div className="news_title">
      <a href="rest/news/">Новости и мероприятия</a>
    </div>
    <NewsItem
      bannerUrl={"/images/promo.jpg"}
      title={"Конкурс селфи от City Park в Instagram"}
      date={"09.04.2018"}
      link={"/rest/news/konkurs-selfi-ot-city-park-v-instagram.html"}
    />
    <NewsItem
      bannerUrl={"/images/wVS7mwYjCyw.jpg"}
      title={"Новое спецпредложение"}
      date={"05.04.2018"}
      link={"/rest/news/novoe-speczpredlozhenie.html"}
    />
    <NewsItem
      bannerUrl={"/images/DSC_0063.JPG"}
      title={"Новое спецпредложение"}
      date={"Бонусная карта от CityPark"}
      link={"rest/news/bonusnaya-karta-ot-citypark.html"}
    />
    <div className="new_end" />
  </div>
