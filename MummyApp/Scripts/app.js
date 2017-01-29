//create main module 
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

		//Chap 2 Mummy Making
		.when('/MummyMaking' , {

			templateUrl: 'Views/MummyMaking.html' ,
			controller : 'chap2Ctrl'
		})

			//Chap 3 Natural Mummies
		.when('/NaturalMummies' , {

			templateUrl: 'Views/NaturalMummies.html' ,
			controller : 'chap3Ctrl'
		});

});


//Scope injection - Routes DEFINED in Controllers Folder


//HTML5 History API - Change route of the URL w/o refreshing the page














