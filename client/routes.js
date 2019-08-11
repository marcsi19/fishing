import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Gallery from './components/gallery'
import SinglePic from './components/singleGalleryPic'
import Home from './components/home'
import AddItem from './components/addItem'
import EditPic from './components/editPic'
import AllUsers from './components/allUsers'
import Irasok from './components/irasok'
import Fekhang from './components/fekhang'
import Referencia from './components/referencia'
import Szerviz from './components/szerviz'

// import {Gallery, Irasok, , Home, AllUsers} from './components/index'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={UserHome} />
        <Route exact path="/galeria" component={Gallery} />
        <Route path="/irasok" component={Irasok} />
        <Route path="/fekhang" component={Fekhang} />
        <Route path="/referencia" component={Referencia} />
        <Route path="/szerviz" component={Szerviz} />
        <Route exact path="/gallery/:id" component={SinglePic} />
        <Route exact path="/" component={Home} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/gallery/:id/editPic" component={EditPic} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/irasok" component={Irasok} />
            <Route path="/home" component={UserHome} />
            <Route path="/addItem" component={AddItem} />
            <Route path="/userList" component={AllUsers} />
            <Route path="/" component={Home} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.users.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
