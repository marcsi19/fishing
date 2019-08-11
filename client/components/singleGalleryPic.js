import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPicById} from '../store/gallery'

export class SinglePic extends Component {
  componentDidMount() {
    this.props.selectPicById(this.props.match.params.id)
  }

  render() {
    console.log('you MADE IT EHERE')
    const {title, description, imageUrl} = {
      ...this.props.selectedPic
    }
    const {admin} = this.props
    const selectPic = {...this.props.selectedPic}
    console.log(selectPic.category)
    // const id = this.props.match.params.id
    return (
      <div className="single-container">
        <Link to={`/${selectPic.category}`} className="single-pic-back">
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
                  Szerkesztés
                </Link>
              </h2>
            )}
          </h3>

          <img id="single-pic" src={imageUrl} />
          <p>{description}</p>
          <Link to={`/${selectPic.category}`} className="single-pic-back">
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
