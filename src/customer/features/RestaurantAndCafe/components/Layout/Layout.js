import React from 'react'
import { renderRoutes } from 'react-router-config'

import { REST_MAIN, MENU, NEWS } from '../../links'
import { Header, Chef } from 'components'
import { NavigationBar, SideBar } from 'containers'

export default ({ route, location: { pathname } }) => {

  const sideBarVariants = () => {
    switch (pathname) {
      case MENU.url:
        return <SideBar showDelivery={false} showHotelContacts={false} />
      case NEWS.url:
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
          title: REST_MAIN.title,
          link: REST_MAIN.url
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
