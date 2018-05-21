import React from 'react'
import { renderRoutes } from 'react-router-config'

import { SideBar, Footer, Chef, NavigationBar } from 'components'
import { OrderDetails } from 'features/OrderDetails/containers'

export default ({ route, location }) => {
  return <div className="body">
    <div className="p1" />
    <div className="p2" />
    {
      (() => {
        switch (location.pathname) {
          case "/":
            return (
              <div>
               <div className="fold fold_home" />
               {route && renderRoutes(route.routes)}
               <Footer />
               <NavigationBar />
             </div>
            )
          case "/order_details":
            return (
              <div className="content">
               <OrderDetails />
              </div>
            )
          default:
            return (
              <div style={{lineHeight: "22px"}}>
                <div className="fold fold_side" />
                <SideBar />
                <div className="content">
                  <div className="partbody">
                   {route && renderRoutes(route.routes)}
                  </div>
                </div>
                <Chef />
                <Footer />
                <NavigationBar />
              </div>
            )
         }
      })()
    }
  </div>
}
