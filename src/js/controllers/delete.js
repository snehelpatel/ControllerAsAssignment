function DeleteController ($state, UserService) {

  let vm = this;

  this.deleteUser = deleteUser;

  function deleteUser (user) {
    console.log("heh")
    UserService.deleteUser(user).then((resp) => {
      $state.go('root.home');
    });
  };

};

DeleteController.$inject = ['$state', 'UserService'];
export { DeleteController };
