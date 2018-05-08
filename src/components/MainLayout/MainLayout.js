import React from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import MainMenu from '../MainMenu'
import MainPage from '../MainPage'
import Footer from '../Footer'

export default () =>
  <div className="body">
    <div className="p1"></div>
    <div className="p2"></div>
    <div className="fold"></div>
    <MainPage />
    <Footer />
    <MainMenu />
    <div className="logo"></div>
  </div>
