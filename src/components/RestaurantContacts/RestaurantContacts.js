import React from 'react'
import PropTypes from 'prop-types'

const RestarauntContacts = ({ displayType }) =>
  <div className={`rest_contacts rest_contacts_${displayType}`}>
    Забронировать столик
    <span>в ресторане или летнем кафе</span>
    <div><a className="contacts" href="tel:+79183119791">8-918-311-97-91</a></div>
    <div><a className="contacts" href="tel:+78615533003">8 (86155) 3-30-03</a></div>
  </div>

RestarauntContacts.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default RestarauntContacts  
