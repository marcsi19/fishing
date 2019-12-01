import React from 'react'
import {connect} from 'react-redux'
import {editItem, selectPicById} from '../store/gallery'
import {withRouter, Link} from 'react-router-dom'

const defaultState = {item: {}}

class EditPic extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.selectPicById(this.props.match.params.id)
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      await this.props.editItem(this.props.match.params.id, this.state)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {title, description, imageUrl, category, link} = {
      ...this.props.pic
    }
    console.log('TITLE', this.props.pic)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="radio">
          <p>Category</p>
          <label htmlFor="category">
            <input
              type="radio"
              value="Galeria"
              checked={true}
              onChange={this.handleChange}
              name="category"
            />
            Galeria
          </label>
        </div>
        <div className="radio">
          <label htmlFor="category">
            <input
              type="radio"
              value="Irasok"
              onChange={this.handleChange}
              name="category"
            />
            Irasok
          </label>
        </div>
        <div className="radio">
          <label htmlFor="category">
            <input
              type="radio"
              value="Referencia"
              onChange={this.handleChange}
              name="category"
            />
            Referencia
          </label>
        </div>
        <div className="radio">
          <label htmlFor="category">
            <input
              type="radio"
              value="Fekhang"
              onChange={this.handleChange}
              name="category"
            />
            Fekhang
          </label>
        </div>
        <div className="radio">
          <label htmlFor="category">
            <input
              type="radio"
              value="Szerviz"
              onChange={this.handleChange}
              name="category"
            />
            Szerviz
          </label>
        </div> */}
          <label htmlFor="title">Cím: </label>
          <input
            type="text"
            name="title"
            className="textbox"
            onChange={this.handleChange}
            defaultValue={title}
            placeholder={title}
          />
          <label htmlFor="description">Leírás: </label>
          <textarea
            name="description"
            className="textbox_desc"
            onChange={this.handleChange}
            value={this.state.description || description}
            // placeholder={description}
          />
          <label htmlFor="imageUrl">Kép url: </label>
          <input
            type="text"
            name="imageUrl"
            className="textbox"
            onChange={this.handleChange}
            defaultValue={imageUrl}
            placeholder={imageUrl}
          />
          <label htmlFor="link">Link url: </label>
          <input
            type="text"
            name="link"
            className="textbox"
            onChange={this.handleChange}
            defaultValue={link}
            placeholder={link}
          />
          <div className="radio">
            <p>Boritokép</p>
            <label>
              <input
                type="radio"
                value="false"
                checked={true}
                onChange={this.handleChange}
                name="homepage"
              />
              Nem
            </label>
          </div>
          <div className="radio_end">
            <label>
              <input
                type="radio"
                value="true"
                onChange={this.handleChange}
                name="homepage"
              />
              Igen
            </label>
          </div>

          <label htmlFor="category" className="form_cat">
            Kategória (Galeria, Irasok, Referencia, Fekhang, Szerviz)
          </label>
          <textarea
            type="text"
            name="category"
            className="textbox"
            onChange={this.handleChange}
            placeholder={category}
            defaultValue={category}
          />
          <button type="submit" className="buttons">
            Jóváhagyás
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pic: state.gallery.pic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editItem(id, item) {
      dispatch(editItem(id, item))
    },
    selectPicById: id => dispatch(selectPicById(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPic))
