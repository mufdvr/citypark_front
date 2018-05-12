import React from 'react'

import { SocShare, PhotoGallery, Breadcrumbs } from 'components'
import * as images from './images'
import { MAIN, CAFE } from '../../routes'

export default () =>
  <div className="light">
    <Breadcrumbs
      links={[
        MAIN,
        CAFE
      ]}
    />
    <SocShare
      link="http://cityparkvip.ru/rest/kafe.html"
      title="РГК «City Park» - Летнее кафе"
      image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
    />
    <h1>Летнее кафе</h1>
    <h2>
      <span style={{fontSize: "1.17em", fontWeight: "normal", lineHeight: "1.5em"}}>
        Уютное летнее кафе, где вы всегда&nbsp;можете укрыться от городского зноя в&nbsp;
        прохладной тени или уединиться в застекленной охлаждаемой террасе.
      </span>
    </h2>
    <p className="justifyleft">
      <img
        src={images.panoramaObrez}
        alt="Letnee_kafe_panorama"
        width="768"
        height="299"
      />
    </p>
    <p className="justifyleft">
      &nbsp;
    </p>
    <p className="justifyleft">
      <img
        src={images.photo1}
        alt="letnee_kafe_terrasa"
        width="380"
        height="253"
      />
      &nbsp; &nbsp;
      <img
        src={images.photo2}
        alt="terrasa_1"
        width="380"
        height="253"
      />
      <br/>
      В летнем кафе City Park вы насладитесь восхитительными блюдами европейской и японской кухни от&nbsp;
      первоклассных поваров, а также приятными прохладительными напитками из&nbsp;
      широкого ассортимента бара.
      <br/>
      Через большие окна террасы в холодное время года вы можете наслаждаться великолепным пейзажем городского парка.
    </p>
    <p className="justifyleft">
      <strong>
        <span>
          На всей территории РГК City Park доступен бесплатный&nbsp;
          Wi-fi&nbsp;
        </span>
      </strong>
    </p>
    <p className="justifyleft">
      <strong>
        &nbsp;
      </strong>
    </p>
    <h3 className="justifyleft">
      Забронировать столик или заказать доставку еды по Белореченску вы можете по телефону +7-918-311-97-91 или на сайте РГК City Park <a title="РГК City Park Белореченск. Доставка еды." href="http://cityparkvip.ru/">www.cityparkvip.ru</a> в разделе <a href="rest/menu/">"Меню"</a>
    </h3>
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
        },
        {
          thumb: images.thumb4,
          image: images.image4
        },
        {
          thumb: images.thumb5,
          image: images.image5
        },
        {
          thumb: images.thumb6,
          image: images.image6
        }
      ]}
    />
    <a href="http://cityparkvip.ru/assets/tour/kafe.html" target="_blank" className="tur_btn" style={{top: "80px", right: "30px"}}></a>
  </div>
