import React from 'react'
import PropTypes from 'prop-types'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const PhotoGallery = ({ items }) => {
  console.log(items)
  return <div className="room_gallery" style={{paddingTop: "30px"}}>
    <div className="gallery_title">Фотогалерея</div>
    {
      items.map(item =>
      <div className="gal_img">
        <ReactFancyBox
          thumbnail={item.thumb}
          image={item.image}
        />
      </div>  
      )
    }
  </div>
}

PhotoGallery.propTypes = {
  items: PropTypes.array.isRequired
}

export default PhotoGallery
