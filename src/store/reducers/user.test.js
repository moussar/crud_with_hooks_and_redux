import userReducer, { initialState } from "./user";
import * as T from "../types/user";

const initialUser = {
  fullname: "",
  username: "",
  legal: "",
  active: false
};
const mockUser = {
  fullname: "joe do",
  username: "jdo",
  legal: "JDO",
  active: false
};

const mockUsers = [mockUser];
describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle change_field", () => {
    let expectedState = {
      ...initialState,
      currentUser: { ...initialState.currentUser, fullname: "joe" }
    };
    expect(
      userReducer(initialState, {
        type: T.change_field,
        payload: { name: "fullname", value: "joe" }
      })
    ).toEqual(expectedState);
  });

  it("should handle fetch_users_request", () => {
    let expectedState = {
      ...initialState,
      isLoading: true
    };
    expect(
      userReducer(initialState, {
        type: T.fetch_users_request
      })
    ).toEqual(expectedState);
  });

  it("should handle fetch_users_success", () => {
    let expectedState = {
      ...initialState,
      users: mockUsers,
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.fetch_users_success,
        payload: { users: mockUsers }
      })
    ).toEqual(expectedState);
  });

  it("should handle fetch_users_failure", () => {
    let expectedState = {
      ...initialState,
      error: "Request failed with status code 404",
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.fetch_users_failure,
        payload: {
          error: "Request failed with status code 404"
        }
      })
    ).toEqual(expectedState);
  });

  it("should handle create_user_request", () => {
    let expectedState = {
      ...initialState,
      isLoading: true
    };
    expect(
      userReducer(initialState, {
        type: T.create_user_request
      })
    ).toEqual(expectedState);
  });

  it("should handle create_user_success", () => {
    let expectedState = {
      ...initialState,
      users: mockUsers,
      currentUser: initialUser,
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.create_user_success,
        payload: { users: mockUsers }
      })
    ).toEqual(expectedState);
  });

  it("should handle create_user_failure", () => {
    let expectedState = {
      ...initialState,
      error: "Request failed with status code 500",
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.create_user_failure,
        payload: {
          error: "Request failed with status code 500"
        }
      })
    ).toEqual(expectedState);
  });

  it("should handle edit_user", () => {
    let expectedState = {
      ...initialState,
      currentUser: mockUser,
      isEditng: true
    };
    expect(
      userReducer(initialState, {
        type: T.edit_user,
        payload: { user: mockUser }
      })
    ).toEqual(expectedState);
  });

  it("should handle update_user_request", () => {
    let expectedState = {
      ...initialState,
      isEditng: true,
      isLoading: true
    };
    expect(
      userReducer(initialState, {
        type: T.update_user_request
      })
    ).toEqual(expectedState);
  });

  it("should handle update_user_success", () => {
    let expectedState = {
      ...initialState,
      users: mockUsers,
      currentUser: initialUser,
      isEditng: false,
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.update_user_success,
        payload: { users: mockUsers }
      })
    ).toEqual(expectedState);
  });

  it("should handle update_user_failure", () => {
    let expectedState = {
      ...initialState,
      error: "Request failed with status code 500",
      isLoading: false
    };
    expect(
      userReducer(initialState, {
        type: T.update_user_failure,
        payload: {
          error: "Request failed with status code 500"
        }
      })
    ).toEqual(expectedState);
  });
});
