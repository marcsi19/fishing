import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPicById, deletePic} from '../store/gallery'

export class SinglePic extends Component {
  constructor(props) {
    super(props)
    this.removePicture = this.removePicture.bind(this)
  }
  componentDidMount() {
    this.props.selectPicById(this.props.match.params.id)
  }

  async removePicture(id) {
    try {
      await this.props.deletePic(id)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {title, description, imageUrl, link} = {
      ...this.props.selectedPic
    }
    const {admin} = this.props
    const selectPic = {...this.props.selectedPic}
    console.log(description)
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

          <p>
            {' '}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="single-pic-back"
            >
              {link ? 'Bovebben' : ''}
            </a>
          </p>
          {/* <p>{description}</p> */}
          <div>
            {description
              ? description.split('\n').map((item, i) => <p key={i}>{item}</p>)
              : ''}
          </div>

          <h3 className="single-pic-title" />
          {admin ? (
            <h2>
              <Link
                className="edit-but delete-but"
                to={`/${selectPic.category}`}
                onClick={() => this.removePicture(selectPic.id)}
              >
                Delete
              </Link>
            </h2>
          ) : (
            <Link to={`/${selectPic.category}`} className="single-pic-back">
              Vissza
            </Link>
          )}
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
  selectPicById: id => dispatch(selectPicById(id)),
  deletePic: id => dispatch(deletePic(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SinglePic)
)
