import React from 'react'

import img from './img.png'

export default () =>
  <div className="body">
    <div className="line">
      <div className="img">
        <img src={img} />
      </div>
      <div className="txt">
        <h1 className="title">404</h1>
        <b>Запрашиваемая страница не найдена</b><br/>
        <p>Извините, но запрашиваемая вами страница не найдена. Проверьте правильность ввода адреса.</p>
      </div>
    </div>
  </div>
