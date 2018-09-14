import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"
import { Helmet } from 'react-helmet'

import * as actions from '../../actions'
import { Spinner } from 'components'
import { PAYMENT } from '../../links'
import { TITLE_PREFIX } from 'appConstants'

class OrderDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      frameHeight: "670px",
      frameLoading: true
    }
  }
   
  handleClick = () => {
    window.frames.widget.postMessage('{"m_type":"request","m_val":"submitForm"}', "*");
  }

  handleFrameLoad = () => {
    this.setState({
      frameLoading: false
    })
  }

  listener = event => {
    const msg = JSON.parse(event.data);
    this.setState({
      frameHeight: Number(msg.height) + 10 + "px"
    })
  }

  componentDidMount = () => {
    const { loadOrderFromLocalstorage, order } = this.props
    order.mnt_signature ? localStorage.setItem("order", JSON.stringify(order)) : loadOrderFromLocalstorage()
    window.addEventListener ? window.addEventListener("message", this.listener)
      : window.attachEvent("onmessage", this.listener)
  }

  render = () => {
    const { frameHeight, frameLoading } = this.state
    const { REACT_APP_MNT_ID, REACT_APP_ASSISTANT, REACT_APP_MNT_TEST_MODE, REACT_APP_MNT_CURRENCY_CODE } = process.env
    const { order: {id, amount, mnt_signature } } = this.props
    return (
      <div style={{ position: "relative" }}>
        {frameLoading ? Spinner() : null}
        <Helmet title={TITLE_PREFIX + PAYMENT.TITLE} />
        <div id="order" className="form-layout">
          <div id="order-header">
            <div id="logo" className="order-logo" />
            <h2>{PAYMENT.TITLE}</h2>
          </div>
          { 
            mnt_signature ? 
              <iframe 
                onLoad={this.handleFrameLoad} 
                name="moneta_widget" 
                title="Moneta"
                id="widget" 
                style={{width: "100%", height: frameHeight}} 
                src={REACT_APP_ASSISTANT + "?" +
                "MNT_ID=" + REACT_APP_MNT_ID +
                "&MNT_TEST_MODE=" + REACT_APP_MNT_TEST_MODE +
                "&MNT_CURRENCY_CODE=" + REACT_APP_MNT_CURRENCY_CODE +
                "&MNT_TRANSACTION_ID=" + id +
                "&MNT_AMOUNT=" + amount +
                "&MNT_SIGNATURE=" + mnt_signature +
                "&paymentSystem.unitId=43674"}
              >
                Ваш браузер не поддерживает плавающие фреймы!
              </iframe>
            : null
          }    
          <div id="submit">
            <div className="z_btn order-btn">
              Отмена
              <i style={{ color: "red" }} className="material-icons">close</i>
            </div>
            <div onClick={this.handleSubmit} className="z_btn order-btn">
              Далее
              <i style={{ color: "green" }} className="material-icons">done</i>
            </div>
          </div>
        </div>
        <div id="leaf-right" className="leaf leafs" />
        <div id="leaf-left" className="leaf leafs" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order.payload,
  fetching: state.order.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const WrappedComponent = ReduxWrapper(withRouter(OrderDetails))
export default WrappedComponent
