import React from 'react'

import News from 'components/News'
import RoomsCatalog from 'components/RoomsCatalog'
import HotelContacts from 'components/HotelContacts'
import RestarauntContacts from 'components/RestarauntContacts'
import Header from 'components/Header'
import Delivery from 'components/Delivery'

export default () =>
  <div>
    <div className="part">
      <Header
        side={"left"}
        title={"Ресторан и летнее кафе"}
        link={"/rest"}
        backgroundImage={"/images/header/left.jpg"}
      />
      <div className="partbody" style={{float: "right"}}>
        <div className="light">
          <Delivery />
          <News />
          <RestarauntContacts />
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
          <RoomsCatalog />
          <HotelContacts />
        </div>
      </div>
    </div>
    <div className="logo" />
  </div>
