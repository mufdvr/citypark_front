import React from 'react'
import { renderRoutes } from 'react-router-config'

import { HOTEL_MAIN, DOCUMENTATION } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route, location: { pathname } }) => {

  const sideBarVariants = () => {
    switch (pathname) {
      case DOCUMENTATION.url:
        return <SideBar
          showHotelContacts={false}
          showDelivery={false}
          showRoomsCatalog={false}
          showRestaurantContacts={false}
          showNews={false}
        />
      default:
        return <SideBar showRestaurantContacts={false} />
    }
  }

  return (
    <div style={{lineHeight: "22px"}}>
      <div className="fold fold_side" />
      { sideBarVariants() }
      <div className="content">
        { Header({
          side: "left",
          title: HOTEL_MAIN.title,
          link: HOTEL_MAIN.url
        })}
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}
