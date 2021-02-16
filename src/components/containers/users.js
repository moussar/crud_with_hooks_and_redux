import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/user";
import UserList from "../ui/UserList";
import UserForm from "../ui/UserForm";

function UserContainer({
  state,
  onGetUsers,
  onCreateUser,
  onUpdateUser,
  onChangeField,
  onEditUser,
  onDeleteUser
}) {
  
  const { users, currentUser, isEditng, isLoading, error } = state;
  //console.log("state : ", state);
  useEffect(() => {
    onGetUsers();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEditng) {
      onCreateUser(currentUser);
    } else {
      onUpdateUser(currentUser);
    }
  }

  return (
    <div className="container">
      {error && <p className="error">Error : {error}</p>}
      <UserForm
        currentUser={currentUser}
        handleChange={onChangeField}
        handleSubmit={handleSubmit}
      />
      <UserList
        isLoading={isLoading}
        users={users}
        handleEdit={user => onEditUser(user)}
        handleDelete={userId => onDeleteUser(userId)}
      />
    </div>
  );
}

export default connect(
  state => ({ state: state.user }),
  userActions
)(UserContainer);

/*
export default connect(
  state => ({ state: state.user }),
  dispatch => ({
    dispatch,
    ...bindActionCreators(userActions, dispatch)
  })
)(UserContainer);*/
