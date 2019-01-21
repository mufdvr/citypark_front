import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'

import { QUERY_PREFIX, MAX_SUGGESTIONS } from './constants'

class DaData extends React.Component {
  constructor(props) {
    super(props)
    this.fetching = false
    this.skipValidation = false
    this.state = {
      query: '',
      inputQuery: '',
      inputFocused: false,
      suggestions: [],
      suggestionIndex: -1,
      suggestionsVisible: true,
    }
  }

  onInputFocus = () => {
    this.setState({ inputFocused: true })
    //if (this.state.suggestions.length == 0) {
    //  this.fetchSuggestions()
    //}
  }

  onInputBlur = () => {
    const { suggestionIndex, suggestions } = this.state
    const { onChange } = this.props
    this.setState({ inputFocused: false })
    switch (suggestions.length) {
      case 0:
        this.fetchSuggestions()
        break
      case 1:
        this.setState({ query: suggestions[0].unrestricted_value })
        onChange({
          value: suggestions[0].unrestricted_value,
          isValid: suggestions[0].data.fias_level >= 8
        })
        break
      default:
        if (suggestionIndex >= 0) {
          this.selectSuggestion(suggestionIndex)
        } else {
          this.setState({ query: suggestions[0].unrestricted_value })
          onChange({
            value: suggestions[0].unrestricted_value,
            isValid: suggestions[0].data.fias_level >= 8
          })
        }
    }
  }

  onInputChange = event => {
    const { value } = event.target
    const { onChange } = this.props
    this.skipValidation && onChange({ value, isValid: true })
    this.setState({
      query: value,
      inputQuery: value,
      suggestionsVisible: true
    }, () => this.fetchSuggestions())
  }

  onKeyPress = event => {
    const { suggestionIndex, suggestions, inputQuery } = this.state
    switch (event.which) {
      case 40: {
        // Arrow down
        event.preventDefault()
        if (suggestionIndex < suggestions.length - 1) {
          let newSuggestionIndex = suggestionIndex + 1
          let newInputQuery = suggestions[newSuggestionIndex].unrestricted_value
          this.setState({
            suggestionIndex: newSuggestionIndex,
            query: newInputQuery
          })
        }
        break
      }
      case 38: {
        // Arrow up
        event.preventDefault()
        if (suggestionIndex >= 0) {
          let newSuggestionIndex = suggestionIndex - 1
          let newInputQuery = newSuggestionIndex === -1 ? inputQuery : suggestions[newSuggestionIndex].unrestricted_value
          this.setState({
            suggestionIndex: newSuggestionIndex,
            query: newInputQuery
          })
        }
        break
      }
      case 13: {
        // Enter
        event.preventDefault()
        suggestionIndex >= 0 && this.selectSuggestion(suggestionIndex)
        break
      }
      default:
    }
  }

  fetchSuggestions = () => {
    const { query } = this.state
    const { settlement } = this.props
    const fullQueryPrefix = QUERY_PREFIX + settlement + ', '
    const { REACT_APP_DADATA_API_KEY } = process.env
    const checkResponse = response =>
      new Promise((resolve, reject) => {
        response.ok ? response.json().then(json => resolve(json)) : reject()
      })
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token ' + REACT_APP_DADATA_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: fullQueryPrefix + query,
        count: MAX_SUGGESTIONS
      })
    }
    if (!this.fetching) {
      this.fetching = true
      fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", options)
        .then(response => checkResponse(response)
          .then(payload => {
            this.fetching = false
            this.skipValidation = false
            this.setState({
              suggestions: payload.suggestions.map(suggestion => ({
                ...suggestion,
                unrestricted_value: suggestion.unrestricted_value.replace(fullQueryPrefix, '')
              })),
              suggestionIndex: -1
            })
          })
        ).catch(() => {
          this.fetching = false
          this.skipValidation = true
        })
    }
  }

  onSuggestionClick = (index, event) => {
    event.stopPropagation()
    this.selectSuggestion(index)
  }

  selectSuggestion = index => {
    const { suggestions } = this.state
    const { onChange } = this.props
    const { textInput } = this.refs
    if (suggestions.length >= index - 1) {
      this.setState({
        query: suggestions[index].unrestricted_value,
        suggestionsVisible: false,
        inputQuery: suggestions[index].unrestricted_value
      },
        () => {
          this.fetchSuggestions()
          setTimeout(() => this.setCursorToEnd(textInput), 100)
        })
      if (onChange) {
        onChange({
          value: suggestions[index].unrestricted_value,
          isValid: suggestions[index].data.fias_level >= 8
        })
      }
    }
  }

  setCursorToEnd = element => {
    let valueLength = element.value.length
    if (element.selectionStart || element.selectionStart === '0') {
      // Firefox/Chrome
      element.selectionStart = valueLength
      element.selectionEnd = valueLength
      element.focus()
    }
  }

  getHighlightWords = () => {
    const { inputQuery } = this.state
    const wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д']
    return inputQuery.replace(/[,/\\?$*[\]()]/g, '').split(' ').filter(word => wordsToPass.indexOf(word) < 0)
  }

  suggestionsList = () =>
    this.state.suggestions.map((suggestion, index) => {
      let suggestionClass = 'react-dadata__suggestion'
      if (index === this.state.suggestionIndex) {
        suggestionClass += ' react-dadata__suggestion--current'
      }
      return (
        <div className={suggestionClass} key={suggestion.value} onMouseDown={event => this.onSuggestionClick(index, event)}>
          <Highlighter
            highlightClassName="react-dadata--highlighted"
            searchWords={this.getHighlightWords()}
            textToHighlight={suggestion.unrestricted_value}
          />
        </div>
      )
    })

  componentWillReceiveProps = nextProps => { //очищаем инпут при смене нас пункта
    const { onChange, settlement } = this.props
    if (settlement !== nextProps.settlement) {
      this.setState({
        query: ''
      }, onChange({
        value: '',
        isValid: false
      }))
    }
  }

  render = () => {
    const { query, inputFocused, suggestionsVisible, suggestions } = this.state
    const { className, placeholder } = this.props
    return (
      <div className="react-dadata react-dadata__container">
        <div>
          <input
            className={className}
            placeholder={placeholder}
            value={query}
            ref="textInput"
            onChange={this.onInputChange}
            onKeyPress={this.onKeyPress}
            onKeyDown={this.onKeyPress}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            autoComplete="off"
          />
        </div>
        {
          inputFocused && suggestionsVisible && suggestions && suggestions.length > 0 ?
            <div className="react-dadata__suggestions">
              <div className="react-dadata__suggestion-note">
                Выберите вариант или продолжите ввод
              </div>
              {this.suggestionsList()}
            </div>
            : null
        }
      </div>
    )
  }
}

DaData.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  settlement: PropTypes.string.isRequired
}

export default DaData