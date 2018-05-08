import React from 'react'

export default () =>
  <div>
    <div className="part">
      <div className="header">
        <div className="h_img" style={{backgroundImage: "url(/images/1.jpg)"}}>
          <div className="h_title">
            <div className="h_title_bg" style={{backgroundPosition: "right"}}>
              <div className="l_grad" style={{height: "75px"}}></div>
              <a className="h_title_left" href="rest/">
                    Ресторан и летнее кафе
                  </a>
            </div>
          </div>
        </div>
      </div>
      <div className="partbody" style={{float: "right"}}>
        <div className="light">
          <a href="rest/menu/">
            <div className="deliver_block">
              <img
                className="deliver-img"
                src="/images/2CAM6275.jpg"
              />
              <div className="d_title">
                Доставка еды
              </div>
            </div>
          </a>
          <div className="news_block">
            <div className="news_title">
              <a href="rest/news/">Новости и мероприятия</a>
            </div>
            <div className="new">
              <div className="n_foto">
                <img src="/images/promo.jpg" />
              </div>
              <div className="n_body">
                <div className="n_date">09.04.2018</div>
                <div className="n_title">
                  <a href="rest/news/konkurs-selfi-ot-city-park-v-instagram.html">
                        Конкурс селфи от City Park в Instagram
                      </a>
                </div>
                <div className="n_ttx">
                </div>
              </div>
            </div>
            <div className="new">
              <div className="n_foto">
                <img src="/images/wVS7mwYjCyw.jpg" />
              </div>
              <div className="n_body">
                <div className="n_date">05.04.2018</div>
                <div className="n_title">
                  <a href="rest/news/novoe-speczpredlozhenie.html">
                        Новое спецпредложение
                      </a>
                </div>
                <div className="n_ttx">
                </div>
              </div>
            </div>
            <div className="new">
              <div className="n_foto">
                <img src="/images/DSC_0063.JPG" />
              </div>
              <div className="n_body">
                <div className="n_date">26.03.2018</div>
                <div className="n_title">
                  <a href="rest/news/bonusnaya-karta-ot-citypark.html">
                        Бонусная карта от CityPark
                      </a>
                </div>
                <div className="n_ttx">
                </div>
              </div>
            </div>
            <div className="new_end"></div>
          </div>
          <div className="rest_contacts">
            Забронировать столик
            <span>в ресторане или летнем кафе</span>
            <div>8-918-311-97-91</div>
            <div>8 (86155) 3-30-03</div>
          </div>
        </div>
      </div>
    </div>

    <div className="part">
      <div className="header">
        <div className="h_img" style={{backgroundImage: "url(/images/2.jpg)"}}>
          <div className="h_title">
            <div className="h_title_bg" style={{backgroundPosition: "left"}}>
              <div className="r_grad" style={{height: "75px"}}></div>
              <a className="h_title_right" href="hotel/">
                            	Отель-люкс
                            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="partbody">
        <div className="shade">
          <div className="room_catalog">
            <div className="news_title">
              <a href="hotel/katalog-nomerov/">Каталог номеров</a>
            </div>
            <div className="room">
              <div className="r_img">
                <img src="/images/N9dGCus1wbk.jpg" />
              </div>
              <div className="r_body">
                <div className="r_title">
                  <a href="hotel/katalog-nomerov/odnomestnyie.html">Одноместные номера</a>
                </div>
                <div className="r_ttx">Одноместные номера с двуспальной кроватью.</div>
                <div className="r_summ">
                  <span className="s">2500-3000</span> ₽/ сутки
                </div>
              </div>
            </div>
            <div className="room">
              <div className="r_img">
                <img src="/images/bIGFdJb25nk.jpg" />
              </div>
              <div className="r_body">
                <div className="r_title">
                  <a href="hotel/katalog-nomerov/dvuxmestnyie-nomera.html">Двухместные номера</a>
                </div>
                <div className="r_ttx">Двухместные номера с двумя односпальными кроватями или с двуспальной кроватью "Евро"</div>
                <div className="r_summ"><span className="s">3000</span> ₽/ сутки</div>
              </div>
            </div>
            <div className="room">
              <div className="r_img">
                <img src="/images/YMOwM0GE5aw.jpg" />
              </div>
              <div className="r_body">
                <div className="r_title">
                  <a href="hotel/katalog-nomerov/vip.html">VIP-номер</a>
                </div>
                <div className="r_ttx">
                  Двухкомнатный номер (гостиная + спальня) с балконом.
                </div>
                <div className="r_summ">
                  <span className="s">5000</span> ₽/ сутки
                </div>
              </div>
            </div>
          </div>
          <div className="ost_rooms">
            <div className="rn">1</div>
            <div className="rntxt">свободный<br/>номер</div>
            <div className="ost_end"></div>
          </div>
          <div className="hotel_contacts">
            Забронировать номер
            <div>8-918-311-97-10</div>
            <div>8 (86155) 3-30-02</div>
            <div className="c8800">8-800-100-24-41</div>
            <span>Звонок по России бесплатный</span>
          </div>
        </div>
      </div>
    </div>
  </div>
