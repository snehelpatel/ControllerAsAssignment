function SingleController (UserService, $stateParams, $state) {

  let vm = this;

  vm.user = {};

  function init () {
    console.log ('hehe')
    UserService.getUser($stateParams.id).then((resp) => {
      vm.user = resp.data;
    });
  };

  init();

  this.deleteUser = deleteUser;

  function deleteUser (user) {
    console.log("heh")
    UserService.deleteUser($stateParams.id).then((resp) => {
      $state.go('root.home');
    });
  };
}

SingleController.$inject = ['UserService', '$stateParams', '$state'];
export { SingleController };
