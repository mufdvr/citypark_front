import React from 'react'
import { Link } from 'react-router-dom'

import * as images from './images'
import { PublicOffer } from 'features'

export default () =>
  <div>
    <div className="map_block">
      <div className="m_photo">
        <img
          alt="pic"
          src={images.photo}
        />
      </div>
      <div className="map">
        <a href="https://goo.gl/maps/XLYXH" target="blank">
          <img
            alt="pic"
            src={images.map}
          />
        </a>
      </div>
      <div className="adress">
        <div className="p1" />
        <div className="p2" />
        <div className="adr_txt">
          Ресторанно-гостиничный комплекс City Park, г. Белореченск, ул. Гоголя, 61.
        </div>
      </div>
    </div>

    <div className="footer">
      <Link style={{marginTop: "1.5rem"}} to={PublicOffer.links.PUBLIC_OFFER.URL}>{PublicOffer.links.PUBLIC_OFFER.TITLE}</Link>
      <div className="social">
        <a href="https://vk.com/cityparkvip">
          <div className="soc vk" />
        </a>
        <a href="https://ok.ru/group/53650509856994">
          <div className="soc ok" />
        </a>
        <a href="https://www.instagram.com/cityparkvipru/">
          <div className="soc ig" />
        </a>
      </div>
      <div className="inn">
        <div>
          ООО «Олимп» ИНН 2309117400 ОГРН 1092309002378
        </div>
      </div>
      <div className="evrika">
        <p>Разработка сайта</p>
        <a href="http://evrikapr.ru" target="_blank" rel="noopener noreferrer">
          <div className="evrikalogo" />
        </a>
        <a href="http://sorc.ru" target="_blank" rel="noopener noreferrer">
          <div className="sorclogo" />
        </a>
      </div>
    </div>
  </div>
