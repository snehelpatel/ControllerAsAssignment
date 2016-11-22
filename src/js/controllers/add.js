
function AddController ($state, UserService) {

  let vm = this;

  this.addUser = addUser;

  function addUser (user) {
    UserService.addUser(user).then((resp) => {
      $state.go('root.home');
    });
  };

};

AddController.$inject = ['$state', 'UserService'];
export { AddController };
