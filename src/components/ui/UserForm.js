import React from "react";

function UserForm({ currentUser, handleChange, handleSubmit }) {
  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">FullName</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="First Name"
          value={currentUser.fullname}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={currentUser.username}
          onChange={handleChange}
        />
        <label htmlFor="legal">Legal</label>
        <input
          type="text"
          name="legal"
          id="legal"
          placeholder="Legal"
          value={currentUser.legal}
          onChange={handleChange}
        />
        <label>Active</label>
        <label>
          <input
            type="radio"
            name="active"
            value={true}
            checked={currentUser.active === true}
            onChange={handleChange}
          />
          {" Yes"}
        </label>
        <label>
          <input
            type="radio"
            name="active"
            value={false}
            checked={currentUser.active === false}
            onChange={handleChange}
          />
          {" No"}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
