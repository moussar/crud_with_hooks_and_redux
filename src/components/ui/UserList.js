import React from "react";

function UserList({ users, handleEdit, handleDelete, isLoading }) {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="striped-table">
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Legal</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.legal}</td>
              <td>{user.active ? "Yes" : "No"}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
