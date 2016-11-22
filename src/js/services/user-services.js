import { SERVER } from "../server";

function UserService ($http) {

  this.allUsers = function () {
    return $http.get(SERVER);
  };

  this.addUser = function (user) {
    return $http.post(SERVER, user);
  };

  this.getUser = function (id) {
    let url = SERVER + id;
    return $http.get(url);
  };

  this.deleteUser = function (id) {
      let url = SERVER + id;
      return $http.delete(url);
  };

};

UserService.$inject = ['$http'];
export { UserService };
