import React from 'react'

const UserList = props => {
  const users = props.users || []
  const me = props.me
  return (
    <div className="single-container">
      <h2 className="container_header">Users</h2>
      <div className="container_main">
        <table className="top-padding">
          <thead>
            <tr>
              <td>User Id</td>
              <td>Email</td>
              <td>Administrative Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          {users.map(user => {
            console.log(user.email)
            return (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.adminStatus ? 'Admin' : 'Customer'}</td>
                  <td className="button_cont">
                    {user.id === me.id ? (
                      ''
                    ) : (
                      <div>
                        <button
                          type="submit"
                          className="admin_b"
                          onClick={() => {
                            props.remove(user)
                          }}
                        >
                          Delete User
                        </button>

                        <button
                          className="admin_b"
                          onClick={() => {
                            props.changeAdmin(user)
                          }}
                        >
                          Change Admin Status
                        </button>
                      </div>
                    )}
                    {/* <button
                      className="admin_b"
                      onClick={() => {
                        props.changeAdmin(user)
                      }}
                    >
                      Change Admin Status
                    </button> */}
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default UserList
