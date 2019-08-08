import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

export class Home extends Component {
  render() {
    const images = [
      {
        original: 'fishing11.jpg'
      },
      {
        original: 'fishing22.jpg'
      },
      {
        original: 'fishing33.jpg'
      }
    ]
    return (
      <div className="slide-showing">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
      </div>
    )
  }
}

export default Home
