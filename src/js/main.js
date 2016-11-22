import angular from 'angular';

import { routerConfig } from './router';
import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
import { SingleController } from './controllers/single';
// import { DeleteController } from './controllers/delete';
import { UserService } from './services/user-services';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  // .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  // .controller('DeleteController', DeleteController)
  .controller('SingleController', SingleController)
  .service('UserService', UserService);
