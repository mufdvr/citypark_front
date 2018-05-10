import React from 'react'
import PropTypes from 'prop-types'

const RestarauntContacts = ({ displayType }) =>
  <div className={`rest_contacts rest_contacts_${displayType}`}>
    Забронировать столик
    <span>в ресторане или летнем кафе</span>
    <div>8-918-311-97-91</div>
    <div>8 (86155) 3-30-03</div>
  </div>

RestarauntContacts.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default RestarauntContacts  
