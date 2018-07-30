import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ links }) =>
  <div className="breadcrumbs">
    <Link to="/">Главная</Link>
    {
      links.map((link, index) =>
        index === links.length - 1 ?
          <span key={index}>
            <span>&gt;</span><span style={{textDecoration: "underline", margin: "0 10px"}}>{link.title}</span>
          </span>
        : <span key={index}>
          <span>&gt;</span><Link to={link.URL}>{link.TITLE}</Link>
        </span>
      )
    }
  </div>

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired
  }))
}

export default Breadcrumbs
