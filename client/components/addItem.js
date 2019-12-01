import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {addItem, fetchGallery} from '../store/gallery'

const defaultState = {
  title: '',
  description: '',
  imageUrl: '',
  homepage: false,
  category: '',
  link: ''
}
class AddItem extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async handleSubmit(e) {
    e.preventDefault()
    try {
      await this.props.addItem(this.state)
      // this.props.fetchGallery()
      this.setState(defaultState)
    } catch (err) {
      console.error(err)
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="additem">
        <form onSubmit={this.handleSubmit} className="add_form">
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
          <label htmlFor="title">Cím</label>
          <input
            type="text"
            name="title"
            className="textbox"
            // placeholder=""
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Leírás: </label>
          <textarea
            type="text"
            name="description"
            className="textbox_desc"
            // placeholder=""
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">Kép url: </label>
          <input
            type="text"
            name="imageUrl"
            className="textbox"
            // placeholder=""
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <label htmlFor="link">Link url: </label>
          <input
            type="text"
            name="link"
            className="textbox"
            // placeholder=""
            value={this.state.link}
            onChange={this.handleChange}
          />
          <div className="radio">
            <p>Borítókép</p>
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
            // placeholder=""
            className="textbox"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <button type="submit" className="buttons">
            Feltöltés
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem(pic) {
      dispatch(addItem(pic))
    },
    fetchGallery: () => dispatch(fetchGallery())
  }
}

export default connect(null, mapDispatchToProps)(AddItem)
