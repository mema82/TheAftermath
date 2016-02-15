<<<<<<< Updated upstream:MummyApp/script.js
//create main modulevar 
mummyApp = angular.module('mummyApp', ['ngRoute']);
=======
//create main module 
mummyApp = angular.module('mummyApp', ['ngRoute' , 'ngAnimate']);
>>>>>>> Stashed changes:MummyApp/Scripts/script.js

//Route Configs
mummyApp.config(function($routeProvider) {
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
			//css: '<link rel="stylesheet" href="/Styles/chap1.css">' WHY THIS DOES NOT WORK?
		})

		//Chap 2 Natural Mummies
		.when('/NaturalMummies' , {

			templateUrl: 'partials/NaturalMummies.html' ,
			controller : 'chap2Ctrl'
		});

});


<<<<<<< Updated upstream:MummyApp/script.js
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

=======
//Scope injection - Routes DEFINED in Controllers Folder


//HTML5 History API - Change route of the URL w/o refreshing the page


>>>>>>> Stashed changes:MummyApp/Scripts/script.js












