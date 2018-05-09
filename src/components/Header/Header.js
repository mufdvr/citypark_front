import React from 'react'
import PropTypes from 'prop-types'

const RIGHT = 'right'
const LEFT  = 'left'
const GRADIENT_CLASSES = {
  [RIGHT]: 'r_grad',
  [LEFT]:  'l_grad'
}
const TITLE_CLASSES = {
  [RIGHT]: 'h_title_right',
  [LEFT]:  'h_title_left'
}

const Header = ({ side, backgroundImage, title, link }) =>
  <div className="header">
    <div className="h_img" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="h_title">
        <div className="h_title_bg" style={{backgroundPosition: side}}>
          <div
            className={GRADIENT_CLASSES[side]}
            style={{height: "75px"}}>
          </div>
          <a className={TITLE_CLASSES[side]} href={link}>
            {title}
          </a>
        </div>
      </div>
    </div>
  </div>

Header.propTypes = {
  side: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Header
