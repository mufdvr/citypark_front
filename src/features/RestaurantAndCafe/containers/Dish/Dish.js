import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

import { Personal, Cart } from 'features'

class Dish extends React.Component {

  render = () => {
    const { id, title, cost, description, weight, addItems, addToFavorites, delFavorite, images, user, fav } = this.props
    return (
      <div className="bludo">
        {
          images ?
            <div className="bludo_img">
              <ReactFancyBox
                className="gmg"
                thumbnail={process.env.REACT_APP_API_GATEWAY + images.preview}
                image={process.env.REACT_APP_API_GATEWAY + images.full}
              />
            </div>
          : <div />
        }
        <div className="bludo_txt" style={ images ? null : {marginLeft: "150px"}}>
          <div className="bludo_title">{title}</div>
          {description}
        </div>
        <div className="bludo_dop" style={ images ? null : {marginLeft: "150px"}}>
          <div className="bl_cena">
            <span className="gramm">{weight}</span>
            <span className="bsm"><span className="bsm_n">{cost}</span><span style={{fontSize:"30px"}}>₽</span></span>
          </div>
          {
            user && user.id ?
              fav ? <div onClick={() => delFavorite(id)} className="z_btn">Удалить</div>
              : <div onClick={() => addToFavorites(id)} className="z_btn">В избранное</div>
            : null
          }
          <div onClick={() => addItems([{id, title, cost}])} className="z_btn">Добавить в список заказа</div>
        </div>
      </div>
    )
  }

}


Dish.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  images: PropTypes.object,
  description: PropTypes.string,
  weight: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  user: state.user.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...Personal.actions.favorites,
  ...Cart.actions
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(Dish)
export default WrappedComponent
