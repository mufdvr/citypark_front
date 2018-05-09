import React from 'react'

export default () =>
  <div className="povar_block">
    <div className="povar_line">
      <div style={{
         position: "relative",
         display: "block",
         width: "100%",
         maxWidth: "1500px",
         margin: "0 auto",
         height: "220px"
       }}>
        <div className="povar_info">
          <img src="/images/povar.png" className="povar_ava" />
          <div className="povar_txt">
            <a href="rest/shefblog/">Блог шеф-повара</a>
            Блог нашего шеф-повара Дениса Троицкого
          </div>
        </div>
        <div className="povar_bludo">
          <div className="pb_img">
            <img src="/images/2CAM4538rer.jpg" />
            <div className="pb_img_l"></div>
            <div className="pb_img_r"></div>
          </div>
          <div className="pb_end"></div>
          <div className="pb_txt">
            <div>
              <a href="rest/shefblog/proverka.html">Фриттата</a>
              Итальянский омлет фриттата
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
