import axios from "axios";

let data = JSON.parse(localStorage.getItem("users")) || [];

function _getUsers(resolve, reject) {
  return axios
    .get("https://next.json-generator.com/api/json/get/VkJcc2YPd")
    .then(response => response.data)
    .catch(error => {
      throw error.response.data;
    });

  /*return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });*/
}

function _createUser(user) {
  return new Promise((resolve, reject) => {
    user.id = Date.now();
    data.push(user);
    localStorage.setItem("users", JSON.stringify([...data]));
    resolve(data);
  });
}

function _updateUser(user) {
  return new Promise((resolve, reject) => {
    data = [...data.map(u => (u.id === user.id ? user : u))];
    localStorage.setItem("users", JSON.stringify([...data]));
    resolve(data);
  });
}

function _deleteUser(userId) {
  return new Promise((resolve, reject) => {
    data = [...data.filter(u => u.id !== userId)];
    localStorage.setItem("users", JSON.stringify([...data]));
    resolve(data);
  });
}

export { _getUsers, _createUser, _updateUser, _deleteUser };
