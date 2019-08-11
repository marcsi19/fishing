import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import {fetchGallery} from '../store/gallery'

export class Home extends Component {
  componentDidMount() {
    this.props.fetchGallery()
  }
  render() {
    const gallery = this.props.gallery || []
    const images2 = []
    gallery.filter(elem => elem.homepage).map(pic => {
      images2.push({original: pic.imageUrl})
    })

    // const images = [
    //   {
    //     original: 'fishing2.jpg'
    //   },
    //   {
    //     original: 'fishing1.jpg'
    //   },
    //   {
    //     original: 'fishing3.jpg'
    //   }
    // ]
    return (
      <div>
        <div className="slide-showing">
          <div className="slide-showing-intro">
            <a href="#features">Bemutatkozás</a>
          </div>
          <ImageGallery
            items={images2}
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

const mapStateToProps = state => ({
  gallery: state.gallery.gallery
})

const mapDispatchToProps = dispatch => ({
  fetchGallery: () => dispatch(fetchGallery())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

// export default Home
