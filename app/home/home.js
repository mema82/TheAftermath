'use strict';
 
angular.module('MummyApp.home', ['ngRoute','firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', [function() {
	$scope.SignIn = function($scope) {
		var username = $scope.user.email;
		var password = $scope.user.password;

	//Auth login will go here

	var firebaseObj = new Firebase("https://binding-torch-1624.firebaseIO.com")
	}
 
}]);