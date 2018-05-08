import React from 'react'

export default () =>
  <div className="column">
    <div className="header">
 	    <div className="h_img">
        <div className="h_column">
          <div className="leaf">
		        <a href="http://cityparkvip.ru/" id="logo"></a>
            <div className="slogan">
           	  <a href="rest/restaurant.html" style={{borderBottom: "1px solid #46312a"}}>Ресторан</a>
              <a href="rest/kafe.html" style={{borderBottom: "1px solid #46312a", borderTop: "1px solid #ffe5d0"}}>Летнее кафе</a>
              <a href="hotel/" style={{borderTop: "1px solid #ffe5d0"}}>Отель-люкс</a>
            </div>
	          <div className="h_title">
           	  <div className="h_title_bg" style={{backgroundPosition: "left"}}>
        	      <div className="r_grad" style={{height: "75px"}}>
                  <div className="h_title_right" />
           	    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="partbody">
      <div className="shade">
        <a href="/rest/menu/">
          <div className="deliver_block">
	          <img
              className="deliver-img"
              src="/images/sidebar/2CAM6275.jpg"
              style={{transform: "translate(0px, 0px) rotate(0rad) skewX(0rad) scale(1, 1)"}}
            />
   	        <div className="d_title">Доставка еды</div>
          </div>
        </a>
        <div className="news_block">
	        <div className="news_title">
        	  <a href="rest/news/">Новости и мероприятия</a>
          </div>
	        <div className="new">
	          <div className="n_foto">
		          <img src="/images/sidebar/promo.jpg" />
	          </div>
            <div className="n_body">
    	        <div className="n_date">09.04.2018</div>
              <div className="n_title">
                <a href="rest/news/konkurs-selfi-ot-city-park-v-instagram.html">Конкурс селфи от City Park в Instagram</a>
              </div>
              <div className="n_ttx"></div>
            </div>
          </div>
        </div>
        <div className="room_catalog">
          <div className="news_title">
          	<a href="hotel/katalog-nomerov/">Каталог номеров</a>
	        </div>
	        <div className="room">
            <div className="r_body">
              <div className="r_title">
                <a href="hotel/katalog-nomerov/odnomestnyie.html">Одноместные номера</a>
              </div>
              <div className="r_summ">
                <span className="s">2500-3000</span> ₽/сутки
              </div>
           </div>
         </div>
         <div className="room">
           <div className="r_body">
             <div className="r_title">
               <a href="hotel/katalog-nomerov/dvuxmestnyie-nomera.html">Двухместные номера</a>
             </div>
             <div className="r_summ">
               <span className="s">3000</span> ₽/сутки
             </div>
           </div>
         </div>
         <div className="room">
           <div className="r_body">
      	     <div className="r_title">
               <a href="hotel/katalog-nomerov/vip.html">VIP-номер</a>
             </div>
             <div className="r_summ">
               <span className="s">5000</span> ₽/сутки
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
