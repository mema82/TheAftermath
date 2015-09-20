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
.controller('HomeCtrl', ['$scope' , '$firebaseSimplelogin' ,function($scope, $firebaseSimpleLogin) {
	$scope.SignIn = function($scope) {
		var username = $scope.user.email;
		var password = $scope.user.password;

	//Auth login will go here

	var firebaseObj = new Firebase("https://binding-torch-1624.firebaseIO.com")
		var loginObj = $firebaseSimplelogin(firebaseObj);
	}

	$scope.SignIn = function(event) {
		event.preventDefault(); //Prevent Refresh
		var username = $scope.user.email;
		var password = $scope.user.password;

		loginObj.$login('password' , {
			email: username,
			password: password
		})
		.then(function(user) {
			//Success Callback
			console.log('Auth Successful');
		}, 
		function(error) {
			//Failed Callback
			console.log('Auth Fail');
		});
	}

}
 
}]);