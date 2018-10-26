import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import { NotificationManager} from 'react-notifications'

import { Personal, Cart } from 'features'

class Dish extends React.Component {

  handleAddItems = items => {
    const { addItems } = this.props
    const { REACT_APP_SHOPON } = process.env 
    addItems(items)
    NotificationManager.success(`"${items[0].title}" добавлено в ${ REACT_APP_SHOPON === "true" ? 'корзину' : 'список заказа' }`, '', 1500)
  }

  handeAddToFavorites = (id, title) =>{
    const { addToFavorites } = this.props
    addToFavorites(id)
    NotificationManager.success(`"${title}" добавлено в избранное`, '', 1500)
  }

  render = () => {
    const { id, title, cost, description, weight, 
      delFavorite, can_order, images, user, fav } = this.props
    const { REACT_APP_SHOPON } = process.env  
    return (
      <div className="bludo">
        {
          images ?
            <div className="bludo_img">
              <ReactFancyBox
                className="gmg"
                thumbnail={images.preview}
                image={images.full}
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
            can_order ?
              <div className="dish-buttons">
              {
                user && user.id && REACT_APP_SHOPON === "true" ?
                  fav ? <div onClick={() => delFavorite(id)} className="z_btn">Удалить</div>
                  : <div onClick={() => this.handeAddToFavorites(id, title)} className="z_btn">В избранное</div>
                : null
              }
              <div onClick={() => this.handleAddItems([{id, title, cost}])} className="z_btn">
                { REACT_APP_SHOPON === "true" ? "В корзину" : "Добавить в заказ" }
              </div>
             </div>
            : 
            <div className="dish-cant_order">
              Не подается на вынос.<br/>Попробуйте в City Park!
            </div> 
          }
           
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
