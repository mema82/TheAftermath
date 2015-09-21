//create main modulevar 
myApp = angular.module('mummyApp', ['ngRoute']);

//Route Configs
mummyApp.config(function($routeProvider) {
	$routeProvider

		//Home route
		.when('/', {

			templateUrl : 'partials/home.html' ,
			controller : 'mainCtrl'
		})

		//Chap 1 Whoa Mummy
		.when('/WhoaMummy.html', {

			templateUrl : 'partials/WhoaMummy.html' ,
			controller : 'chap1Ctrl'
		})

		//Chap 2 Natural Mummies
		.when('/NaturalMummies' ,{

			templateUrl: 'partials/NaturalMummies.html' ,
			controller : 'chap2Ctrl'
		});

});






//Scope injection
mummyApp.controller('mainCtrl' , function($scope) {

	//messege to show which view your on
	$scope.message = "This is the main ctrl!";
});