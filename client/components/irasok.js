import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchGallery} from '../store/gallery'
import IrasokList from './irasoklist'

export class Irasok extends Component {
  componentDidMount() {
    this.props.fetchGallery()
  }
  render() {
    const gallery = this.props.gallery || []

    console.log('this is gallery', gallery)
    return (
      <div>
        <div className="gallery_all">
          <div className="gallery_all_sub">
            {gallery.length ? (
              <IrasokList gallery={gallery} />
            ) : (
              <div>There are no pictures</div>
            )}
          </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Irasok))
