import React from 'react'
import PropTypes from 'prop-types'

const quickServices = ['facebook', 'vkontakte', 'odnoklassniki', 'twitter']
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const Share = ({ link, title, image }) =>
  <div id="soc-share">
    <span className="b-share_theme_dark">
      <span className="b-share">
        {
          quickServices.map(service =>
            <a
              key={service}
              rel="nofollow noopener noreferrer"
              target="_blank"
              title={capitalize(service)}
              className={`b-share__handle b-share__link b-share-btn__${service}`}
              href={`https://share.yandex.net/go.xml?service=${service}&url=${link}&title=${title}&image=${image}`}
              data-service={service}
            >
              <span className={`b-share-icon b-share-icon_${service}`}></span>
            </a>
          )
        }
      </span>
    </span>
  </div>

Share.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Share
