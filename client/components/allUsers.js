import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUsers, removingUser, upgradingUser} from '../store/user'
import UserList from './userList'

export class AllUsers extends Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
    this.changeAdmin = this.changeAdmin.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  remove(id) {
    this.props.destroy(id.id)
  }

  changeAdmin(id) {
    this.props.upgrade(id.id)
  }

  render() {
    const users = this.props.users || []
    const me = this.props.user

    return (
      <div>
        <div className="sides">
          <div className="left-side">
            {users.length ? (
              <UserList
                users={users}
                remove={this.remove}
                changeAdmin={this.changeAdmin}
                me={me}
              />
            ) : (
              <div>
                There are no users in your website..if you are seeing this, you
                are a ghost
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  destroy: id => dispatch(removingUser(id)),
  upgrade: id => dispatch(upgradingUser(id))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllUsers)
)
