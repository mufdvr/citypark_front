import React from 'react'
import PropTypes from 'prop-types'

const HotelContacts = ({ displayType }) =>
  <div className={`hotel_contacts hotel_contacts_${displayType}`}>
    Забронировать номер
    <div>8-918-311-97-10</div>
    <div>8 (86155) 3-30-02</div>
    <div className={`c8800 c8800_${displayType}`}>8-800-100-24-41</div>
    <span>Звонок по России бесплатный</span>
  </div>

HotelContacts.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default HotelContacts
