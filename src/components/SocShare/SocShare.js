import React from 'react'
import PropTypes from 'prop-types'

const quickServices = ['facebook', 'vkontakte', 'odnoklassniki', 'twitter']

const Share = ({ link, title, image }) => {
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1)
  }
  return <div id="soc-share">
    <span className="b-share_theme_dark">
      <span className="b-share">
        {
          quickServices.map(service =>
            <a
              key={service}
              rel="nofollow"
              target="_blank"
              title={service.capitalize()}
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
}

Share.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Share
