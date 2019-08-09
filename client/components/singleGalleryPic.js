import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPicById} from '../store/gallery'

export class SinglePic extends Component {
  constructor() {
    super()
    // this.submitHandler = this.submitHandler.bind(this)
  }
  componentDidMount() {
    this.props.selectPicById(this.props.match.params.id)
  }
  // async submitHandler(e) {
  //   e.preventDefault()
  //   const item = {
  //     number: +e.target.number.value,
  //     product: this.props.selectedProduct
  //   }
  //   await this.props.addCartItem(item)
  //   this.props.postToCart(this.props.cart)
  // }

  render() {
    const {title, description, imageUrl} = {
      ...this.props.selectedPic
    }
    const {admin} = this.props
    const selectPic = {...this.props.selectedPic}
    // const id = this.props.match.params.id
    return (
      <div className="container">
        <ul className="single-pic">
          <p />
          <h3 className="single-pic-title">{title}</h3>
          <img id="single-pic" src={imageUrl} />
          <p>{description}</p>
        </ul>
        {admin && (
          <h2>
            <Link
              to={`/gallery/${selectPic.id}/editPic`}
              className="google buttons"
            >
              Edit
            </Link>
          </h2>
        )}
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
