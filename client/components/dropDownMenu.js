import React from 'react'
import {Link} from 'react-router-dom'

class DropDownMenu extends React.Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
  }

  showDropdownMenu(event) {
    event.preventDefault()
    this.setState({displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  render() {
    return (
      // <div>HellO</div>
      <div className="drop_menu" style={{background: 'red', width: '200px'}}>
        <div className="button" onClick={this.showDropdownMenu}>
          Menu
        </div>

        {this.state.displayMenu ? (
          <div>
            <ul className="drop_menu">
              <li>
                <Link to="/" className="nav-main">
                  Nyitólap
                </Link>
              </li>
              <li>
                <Link to="/referencia" className="nav-main">
                  Referencia
                </Link>
              </li>
              <li>
                <Link to="/fekhang" className="nav-main">
                  Fékhang-kiegészítők
                </Link>
              </li>
              <li>
                <Link to="/szerviz" className="nav-main">
                  Orsó szervíz
                </Link>
              </li>
              <li>
                <Link to="/irasok" className="nav-main">
                  Írások
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="nav-main">
                  Galéria
                </Link>
              </li>
              <li>
                <Link to="/partners" className="nav-main">
                  Partnerek
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}

export default DropDownMenu
