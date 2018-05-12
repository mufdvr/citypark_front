import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as images from './images'

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

const Header = ({ side, title, link }) =>
  <div className="header">
    <div className="h_img" style={{backgroundImage: `url(${{[LEFT]: () => images.left, [RIGHT]: () => images.right}[side]()})`}}>
      <div className="h_title">
        <div className="h_title_bg" style={{backgroundPosition: side}}>
          <div
            className={GRADIENT_CLASSES[side]}
            style={{height: "75px"}}>
          </div>
          <Link className={TITLE_CLASSES[side]} to={link}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  </div>

Header.propTypes = {
  side: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Header
