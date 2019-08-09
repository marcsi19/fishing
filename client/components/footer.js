import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="footer-main">
      {isLoggedIn ? (
        <div className="footer">
          <Link to="/home" className="footer">
            Home
          </Link>
          <a href="#" onClick={handleClick} className="footer">
            Logout
          </a>
        </div>
      ) : (
        <div className="footer">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className="footer">
            Login
          </Link>
          <Link to="/signup" className="footer">
            Sign Up
          </Link>
        </div>
      )}
    </div>
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

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
