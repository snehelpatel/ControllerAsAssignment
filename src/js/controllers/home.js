function HomeController (UserService) {

  let vm = this;

  vm.users = [];

  function init () {
    console.log("Starting home controller");
    UserService.allUsers().then((resp) => {
      vm.users = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['UserService'];
export { HomeController };
