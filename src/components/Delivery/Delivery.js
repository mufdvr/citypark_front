import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { RestaurantAndCafe } from 'features'

import * as images from './images'

class Delivery extends React.Component {

  updateDimensions = () => {
    this.setState({
      isMobileView: window.innerWidth < 800
    })
  }

  componentWillMount = () => {
    this.updateDimensions()
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render = () => {
    const { displayType } = this.props
    const { isMobileView } = this.state
    return (
      <Link to={RestaurantAndCafe.links.MENU.URL}>
        <div className={`deliver_block deliver_block_${displayType}`}>
          <img
            alt="pic"
            className={`deliver-img deliver-img_${displayType}`}
            src={ isMobileView ? images.delivery1 : images.delivery2 }
          />
          <div className="d_title">
            Доставка еды
      </div>
        </div>
      </Link>
    )
  }
}

  Delivery.propTypes = {
    displayType: PropTypes.string.isRequired
  }

  export default Delivery
