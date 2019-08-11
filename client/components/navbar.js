import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
export {Login, Signup} from './auth-form'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/" className="nav-main">
            Nyitólap
          </Link>
          <Link to="/referencia" className="nav-main">
            Referencia
          </Link>
          <Link to="/fekhang" className="nav-main">
            Fékhang-kiegészítők
          </Link>
          <Link to="/szerviz" className="nav-main">
            Orsó szervíz
          </Link>
          <Link to="/irasok" className="nav-main">
            Írások
          </Link>
          <Link to="/galeria" className="nav-main">
            Galéria
          </Link>
          <Link to="/partners" className="nav-main">
            Partnerek
          </Link>
          <Link to="/home" className="nav-main">
            Home
          </Link>
          <a href="#" onClick={handleClick} className="nav-main">
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}

          <Link to="/" className="nav-main">
            Nyitólap
          </Link>
          <Link to="/referencia" className="nav-main">
            Referencia
          </Link>
          <Link to="/fekhang" className="nav-main">
            Fékhang-kiegészítők
          </Link>
          <Link to="/szerviz" className="nav-main">
            Orsó szervíz
          </Link>
          <Link to="/irasok" className="nav-main">
            Írások
          </Link>
          <Link to="/galeria" className="nav-main">
            Galéria
          </Link>
          <Link to="/partners" className="nav-main">
            Partnerek
          </Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.users.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
