import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

export class Home extends Component {
  render() {
    const images = [
      {
        original: 'fishing2.jpg'
      },
      {
        original: 'fishing1.jpg'
      },
      {
        original: 'fishing3.jpg'
      }
    ]
    return (
      <div>
        <div className="slide-showing">
          <div className="slide-showing-intro">
            <a href="#features">Bemutatkozás</a>
          </div>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            // autoPlay={true}
          />
        </div>
        <div id="features" className="features">
          <p>Welcome!</p>
        </div>
      </div>
    )
  }
}

export default Home
