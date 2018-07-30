import React from 'react'
import { Link } from 'react-router-dom'

import { RestaurantAndCafe } from 'features'
import * as images from './images'

export default () => {
  const { CHEF_BLOG } = RestaurantAndCafe.links
  return (
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
            <img
              alt="pic"
              src={images.chef}
              className="povar_ava"
            />
            <div className="povar_txt">
              <Link to={CHEF_BLOG.URL}>{CHEF_BLOG.TITLE}</Link>
              Блог нашего шеф-повара Дениса Троицкого
            </div>
          </div>
          <div className="povar_bludo">
            <div className="pb_img">
              <img
                alt="pic"
                src="/images/chef/2CAM4538rer.jpg"
              />
              <div className="pb_img_l"></div>
              <div className="pb_img_r"></div>
            </div>
            <div className="pb_end"></div>
            <div className="pb_txt">
              <div>
                <Link to="rest/shefblog/proverka.html">Фриттата</Link>
                Итальянский омлет фриттата
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
