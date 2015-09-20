'use strict';

angular.module('MummyApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

}]);