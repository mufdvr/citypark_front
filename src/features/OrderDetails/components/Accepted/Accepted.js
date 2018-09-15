import React from 'react'
import { Helmet } from 'react-helmet'
import { TITLE_PREFIX } from 'appConstants.js'
import { ACCEPTED } from '../../links'

export default () => {
  localStorage.clear()
  return (
    <div style={{ position: "relative" }}>
      <Helmet title={TITLE_PREFIX + ACCEPTED.TITLE} />
      <div id="order" className="form-layout">
        <div id="order-header">
          <div id="logo" className="order-logo" />
          <h2>{ACCEPTED.TITLE}</h2>
        </div>
        <div id="order-content">
          <div class="congratulation">
            <img src="/images/success.png" />
            <span>Ваш заказ приянт</span>
          </div>
        </div>
        <div id="submit">
          <div className="z_btn order-btn">
            Отмена
              <i style={{ color: "red" }} className="material-icons">close</i>
          </div>
          <div className="z_btn order-btn">
            Далее
              <i style={{ color: "green" }} className="material-icons">done</i>
          </div>
        </div>
      </div>
      <div id="leaf-right" className="leaf leafs" />
      <div id="leaf-left" className="leaf leafs" />
    </div>
  )
}