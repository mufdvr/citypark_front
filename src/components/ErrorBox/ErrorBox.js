import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ErrorBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  static create(messages) {
    ReactDOM.render(<ErrorBox key={Math.random()} messages={messages} />, document.getElementById('portal'))
  }

  static clear() {
    ReactDOM.render(<div/>, document.getElementById('portal'))
  }

  handleClick = () =>
    this.setState({
      visible: false
    })

  messagesList = () => {
    const { messages } = this.props
    switch (typeof(messages)) {
      case 'object':
        return messages.map((msg, index) => <p key={index}>{msg}</p>)
      case 'string':
        return <p>{messages}</p>
      default:  
    }
  }
   
  componentDidMount = () => {
    const { autoClose } = this.props
    autoClose && setTimeout(this.handleClick, 5000)
  } 

  componentWillReceiveProps = nextProps =>
    this.setState({
      visible: !!nextProps.messages
    })

  render = () => {
    const { visible } = this.state
    return (
      <div className="alert" style={ visible ? null : {display: 'none' }}>
        <span className="closebtn" onClick={this.handleClick}>&times;</span>
        {this.messagesList()}
      </div>
    )
  }
}

ErrorBox.defaultProps = {
  autoClose: true
}

ErrorBox.propTypes = {
  messages: PropTypes.any.isRequired,
  autoClose: PropTypes.bool
}

export default ErrorBox
