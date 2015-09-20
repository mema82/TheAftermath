'use strict';

// Declare app level module which depends on views, and components
angular.module('MummyApp', [
  'ngRoute',
  'MummyApp.view1',
  'MummyApp.view2',
  'MummyApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
