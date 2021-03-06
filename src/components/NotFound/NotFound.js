import React from 'react'
import ReactDOM from 'react-dom'

import img from './img.png'

class NotFound extends React.Component {
  
  componentWillMount = () => {
    ReactDOM.render(<NotFound />, document.getElementById('root'))
  }

  render = () =>
    <div className="not_found">
      <div className="line">
        <div className="img">
          <img src={img} alt="pic" />
        </div>
        <div className="txt">
          <h1 className="title">404</h1>
          <b>Запрашиваемая страница не найдена</b><br/>
          <p>Извините, но запрашиваемая вами страница не найдена. Проверьте правильность ввода адреса.</p>
        </div>
      </div>
    </div>
}  

export default NotFound