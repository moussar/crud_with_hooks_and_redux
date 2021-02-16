import * as T from "../types/user";
import * as API from "../../services/user.service";

/*
const onGetUsers = () => dispatch => {
  dispatch({ type: T.fetch_users_request });
  return API._getUsers()
    .then(users => {
      dispatch({ type: T.fetch_users_success, payload: { users } });
    })
    .catch(error => {
      dispatch({ type: T.fetch_users_failure, payload: { error  } });
    });
};*/

const onGetUsers = () => dispatch => {
  dispatch({ type: T.fetch_users_request });
  return API._getUsers().then(
    users => {
      dispatch({ type: T.fetch_users_success, payload: { users } });
    },
    error => {
      dispatch({ type: T.fetch_users_failure, payload: { error } });
    }
  );
};

const onCreateUser = currentUser => dispatch => {
  dispatch({ type: T.create_user_request });
  return API._createUser(currentUser).then(
    users => {
      dispatch({ type: T.create_user_success, payload: { users } });
    },
    error => {
      dispatch({ type: T.create_user_failure, payload: { error } });
    }
  );
};

const onUpdateUser = currentUser => dispatch => {
  dispatch({ type: T.update_user_request });
  return API._updateUser(currentUser).then(
    users => {
      dispatch({ type: T.update_user_success, payload: { users } });
    },
    error => {
      dispatch({ type: T.update_user_failure, payload: { error } });
    }
  );
};

const onDeleteUser = userId => dispatch => {
  dispatch({ type: T.delete_user_request });
  return API._deleteUser(userId).then(
    users => {
      dispatch({ type: T.delete_user_success, payload: { users } });
    },
    error => {
      dispatch({ type: T.delete_user_failure, payload: { error } });
    }
  );
};

const onEditUser = user => ({ type: T.edit_user, payload: { user } });

const onChangeField = ({ target: { name, value } }) => ({
  type: T.change_field,
  payload: {
    name,
    value: value === "true" || value === "false" ? JSON.parse(value) : value
  }
});

export {
  onGetUsers,
  onCreateUser,
  onUpdateUser,
  onDeleteUser,
  onEditUser,
  onChangeField
};
