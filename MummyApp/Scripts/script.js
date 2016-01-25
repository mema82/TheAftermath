//create main modulevar 
mummyApp = angular.module('mummyApp', ['ngRoute' , 'ngAnimate']);

//Route Configs
mummyApp.config(function($routeProvider , $locationProvider) {


	$routeProvider
		//Home route
		.when('/', {

			templateUrl : 'Views/home.html' ,
			controller : 'mainCtrl'
		})

		//Chap 1 Whoa Mummy
		.when('/WhoaMummy', {

			templateUrl : 'Views/WhoaMummy.html' ,
			controller : 'chap1Ctrl'
		})

		//Chap 2 Natural Mummies
		.when('/NaturalMummies' , {

			templateUrl: 'Views/NaturalMummies.html' ,
			controller : 'chap2Ctrl'
		});

});


//Scope injection - Routes DEFINED in Controllers Folder

mummyApp.controller('mainCtrl' , function($scope) {

	//messege to show which view your on
	$scope.title = "Home";

});

mummyApp.controller('chap1Ctrl' , function($scope) {

	//messege to show which view your on
	$scope.title= "Whoa Mummy!";                 
});

mummyApp.controller('chap2Ctrl' , function($scope) {

	//messege to show which view your on
	$scope.title = "This is Chap 2!";
});

//HTML5 History API - Change route of the URL w/o refreshing the page
$locationProvider.html5Mode(true);














