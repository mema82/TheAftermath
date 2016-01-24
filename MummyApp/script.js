//create main modulevar 
mummyApp = angular.module('mummyApp', ['ngRoute']);

//Route Configs
mummyApp.config(function($routeProvider , $locationProvider) {


	$routeProvider
		//Home route
		.when('/', {

			templateUrl : 'partials/home.html' ,
			controller : 'mainCtrl'
		})

		//Chap 1 Whoa Mummy
		.when('/WhoaMummy', {

			templateUrl : 'partials/WhoaMummy.html' ,
			controller : 'chap1Ctrl'
		})

		//Chap 2 Natural Mummies
		.when('/NaturalMummies' , {

			templateUrl: 'partials/NaturalMummies.html' ,
			controller : 'chap2Ctrl'
		});

});


//Scope injection - Routes DEFINED
mummyApp.controller('mainCtrl' , function($scope) {

	//messege to show which view your on
	$scope.title = "Home";

});

mummyApp.controller('chap1Ctrl' , function($scope) {

	//messege to show which view your on
	$scope.title= "Chap 1!";                                 
});

mummyApp.controller('chap2Ctrl' , function($scope) {

	//messege to show which view your on
	$scope.title = "This is Chap 2!";
});


//HTML5 History API - Change route of the URL w/o refreshing the page
$locationProvider.html5Mode(true);














