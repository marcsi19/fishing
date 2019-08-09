import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPicById} from '../store/gallery'

export class SinglePic extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.selectPicById(this.props.match.params.id)
  }

  render() {
    const {title, description, imageUrl} = {
      ...this.props.selectedPic
    }
    const {admin} = this.props
    const selectPic = {...this.props.selectedPic}
    // const id = this.props.match.params.id
    return (
      <div className="single-container">
        <Link to="/gallery" className="single-pic-back">
          Vissza
        </Link>

        <ul className="single-pic">
          <h3 className="single-pic-title">
            {title}
            {admin && (
              <h2>
                <Link
                  to={`/gallery/${selectPic.id}/editPic`}
                  className="edit-but"
                >
                  Edit
                </Link>
              </h2>
            )}
          </h3>

          <img id="single-pic" src={imageUrl} />
          <p>{description}</p>
          <Link to="/gallery" className="single-pic-back">
            Vissza
          </Link>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedPic: state.gallery.pic,
    admin: state.users.user.adminStatus,
    loggedin: !!state.users.user.id
  }
}

const mapDispatchToProps = dispatch => ({
  selectPicById: id => dispatch(selectPicById(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SinglePic)
)
