import React from 'react'
import { renderRoutes } from 'react-router-config'

import { NavigationBar, SideBar } from 'containers'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.isMobileView = window.innerWidth < 800
  }


  render = () => {
    const { route } = this.props
    return (
      <div style={{ lineHeight: "22px" }}>
        <div className="fold fold_cut" />
        {this.isMobileView ? null : <SideBar />}
        <div className="content">
          <div className="partbody partbody_personal">
            {renderRoutes(route.routes)}
          </div>
        </div>
        <NavigationBar />
      </div>
    )
  }
}

export default Layout
