import React from 'react'
import News from '../News'
import RoomsCatalog from '../RoomsCatalog'
import HotelContacts from '../HotelContacts'
import RestarauntContacts from '../RestarauntContacts'

export default () =>
  <div>
    <div className="logo"></div>
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
          <News />
          <RestarauntContacts />
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
          <RoomsCatalog />
          <HotelContacts />
        </div>
      </div>
    </div>
    <div className="logo" />
  </div>
