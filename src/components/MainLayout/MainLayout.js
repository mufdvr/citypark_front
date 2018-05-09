import React from 'react'

import SideBar from '../SideBar'
import Header from '../Header'
import MainMenu from '../NavigationBar'
import Home from 'features/Home'
import Footer from '../Footer'
import ChefCooker from '../Chef'

export default () =>
  <div className="body">
    <div className="p1"></div>
    <div className="p2"></div>
    <div className="fold"></div>
    <Home />
    <ChefCooker />
    <Footer />
    <MainMenu />
  </div>
