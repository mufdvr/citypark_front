import React from 'react'
import { renderRoutes } from 'react-router-config'

import { REST_MAIN, MENU, NEWS } from '../../links'
import { Header, Chef } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route, location: { pathname } }) => {

  const sideBarVariants = () => {
    switch (pathname) {
      case MENU.URL:
        return <SideBar showDelivery={false} showHotelContacts={false} />
      case NEWS.URL:
        return <SideBar showNews={false} />
      default:
        return <SideBar />
    }
  }

  return (
    <div style={{lineHeight: "22px"}}>
      <div className="fold fold_side" />
      { sideBarVariants() }
      <div className="content">
        { Header({
          side: "left",
          title: REST_MAIN.TITLE,
          link: REST_MAIN.URL
        })}
        <div className="partbody">
          { route && renderRoutes(route.routes) }
        </div>
      </div>
      {Chef()}
      <NavigationBar />
    </div>
  )
}
