import React from 'react'
import PropTypes from 'prop-types'

const HotelContacts = ({ displayType }) =>
  <div className={`hotel_contacts hotel_contacts_${displayType}`}>
    Забронировать номер
    <div><a className="contacts" href="tel:+79183119710">8-918-311-97-10</a></div>
    <div><a className="contacts" href="tel:+78615533002">8 (86155) 3-30-02</a></div>
    <div className={`c8800 c8800_${displayType}`}><a className="contacts" href="tel:+78001002441">8-800-100-24-41</a></div>
    <span>Звонок по России бесплатный</span>
  </div>

HotelContacts.propTypes = {
  displayType: PropTypes.string.isRequired
}

export default HotelContacts
