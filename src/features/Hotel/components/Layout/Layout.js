import React from 'react'
import { renderRoutes } from 'react-router-config'

import { HOTEL_MAIN, DOCUMENTATION } from '../../links'
import { Header } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route, location: { pathname } }) => {

  const sideBarVariants = () => {
    switch (pathname) {
      case DOCUMENTATION.URL:
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
          title: HOTEL_MAIN.TITLE,
          link: HOTEL_MAIN.URL
        })}
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}
