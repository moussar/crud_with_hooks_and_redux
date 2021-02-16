import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import axios from "axios";
import * as actions from "./user";
import * as T from "../types/user";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);
const store = mockStore({});

describe("async actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should create fetch_users_success when fetching users has been done", () => {
    const users = [
      { fullname: "jone do", username: "jdo", legal: "JDO", active: true }
    ];

    mockAxios
      .onGet("https://next.json-generator.com/api/json/get/VkJcc2YPd")
      .reply(200, users);

    const expectedActions = [
      { type: T.fetch_users_request },
      { type: T.fetch_users_success, payload: { users } }
    ];

    return store.dispatch(actions.onGetUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create fetch_users_error when fetching users has been fail", () => {
    const error = "Request failed with status code 404";

    mockAxios
      .onGet("https://next.json-generator.com/api/json/get/VkJcc2YPd")
      .reply(404, error);

    const expectedActions = [
      { type: T.fetch_users_request },
      { type: T.fetch_users_failure, payload: { error } }
    ];

    return store.dispatch(actions.onGetUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("actions", () => {
  it("should create an action to edit a user", () => {
    const user = {
      fullname: "johne doe",
      username: "jdoe",
      lagel: "JDO",
      active: true
    };
    const expectedAction = {
      type: T.edit_user,
      payload: { user }
    };
    expect(actions.onEditUser(user)).toEqual(expectedAction);
  });

  it("should create an action to change a user info", () => {
    const e = { target: { name: "fullname", value: "Kamal" } };

    const expectedAction = {
      type: T.change_field,
      payload: { name: e.target.name, value: e.target.value }
    };
    expect(actions.onChangeField(e)).toEqual(expectedAction);
  });
});
