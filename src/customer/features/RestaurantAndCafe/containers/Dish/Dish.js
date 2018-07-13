import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import ReactFancyBox from 'react-fancybox'
import * as actions from '../../actions'
import 'react-fancybox/lib/fancybox.css'

import Personal from 'features/Personal'

class Dish extends React.Component {

  render = () => {
    const { id, title, cost, description, weight, addToCart, addToFavorites, delFavorite, images, user, fav } = this.props
    return (
      <div className="bludo">
        {
          images ?
            <div className="bludo_img">
              <ReactFancyBox
                className="gmg"
                thumbnail={process.env.REACT_APP_BACK_ROOT + images.preview}
                image={process.env.REACT_APP_BACK_ROOT + images.full}
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
          <div onClick={() => addToCart(id, title, cost, images)} className="z_btn">Добавить в список заказа</div>
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
  user: state.personal.payload.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...Personal.actions.favorites,
  ...actions.cart
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dish)
