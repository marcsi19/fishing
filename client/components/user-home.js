import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, admin} = props
  return (
    <div className="homepage">
      <h3>Welcome, {email}</h3>
      {admin && (
        <h2>
          <Link to="/addItem" className="addprod_button">
            Kép hozzáadása
          </Link>
        </h2>
      )}
      {admin && (
        <h2>
          <Link to="/userList" className="addprod_button">
            Felhasznalók kezelése
          </Link>
        </h2>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.users.user.email,
    admin: state.users.user.adminStatus,
    address: state.users.user.address
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
