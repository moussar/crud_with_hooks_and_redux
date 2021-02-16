import * as T from "../types/user";

const initialUser = { fullname: "", username: "", legal: "", active: false };
export const initialState = {
  users: [],
  currentUser: initialUser,
  error: "",
  isEditng: false,
  isLoading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case T.change_field:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          [action.payload.name]: action.payload.value
        }
      };
    case T.fetch_users_request:
      return { ...state, isLoading: true };
    case T.fetch_users_success:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    case T.fetch_users_failure:
      return { ...state, error: action.payload.error, isLoading: false };
    case T.create_user_request:
      return { ...state, isLoading: true };
    case T.create_user_success:
      return {
        ...state,
        users: action.payload.users,
        currentUser: initialUser,
        isLoading: false
      };
    case T.create_user_failure:
      return { ...state, error: action.payload.error, isLoading: false };
    case T.edit_user:
      return {
        ...state,
        currentUser: action.payload.user,
        isEditng: true
      };
    case T.update_user_request:
      return { ...state, isEditng: true, isLoading: true };
    case T.update_user_success:
      return {
        ...state,
        users: action.payload.users,
        currentUser: initialUser,
        isEditng: false,
        isLoading: false
      };
    case T.update_user_failure:
      return { ...state, error: action.payload.error, isLoading: false };
    case T.delete_user_request:
      return { ...state, isLoading: true };
    case T.delete_user_success:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    case T.delete_user_failure:
      return { ...state, error: action.payload.error, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
