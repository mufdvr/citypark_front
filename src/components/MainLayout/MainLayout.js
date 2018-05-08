import React from 'react'
import SideBar from '../SideBar'
import Header from '../Header'

export default () =>
  <div className="body">
    <SideBar />
    <div className="content">
      <Header />
      <div className="partbody" />
    </div>
  </div>
