import React from 'react'
import PropTypes from 'prop-types'

//https://stephanwagner.me/only-css-loading-spinner

const SpinButton = ({ spin = 0, children, className, onClick }) =>
  <div
    disabled={!!spin}
    className={ className + (spin ? ' spinner' : '') }
    onClick={onClick}
  >
    {children}
  </div>

SpinButton.propTypes = {
  spin: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

export default SpinButton
