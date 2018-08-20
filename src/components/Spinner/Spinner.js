import React from 'react'

//http://epic-spinners.epicmax.co/#/

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 60,
  zIndex: 500
}

export default () =>
  <div style={backdropStyle}>
    <div className="spinner-container">
      <div className="loader">Loading...</div>
    </div>
  </div>