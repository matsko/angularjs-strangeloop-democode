angular.module('databus',
  ['databus.config',
   'databus.helpers',
   'databus.homePages',
   'databus.nav',
   'ngResource',
   'ngRoute',
   'ngAnimate'])

  .run(function($rootScope, $routeParams, angularFireCollection, FIREBASE_URI) {
    $rootScope.routeParams = $routeParams;
  });
