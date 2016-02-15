<<<<<<< Updated upstream:MummyApp/script.js
//create main modulevar 
<<<<<<< HEAD:MummyApp/script.js
mummyApp = angular.module('mummyApp', ['ngRoute']);
=======
//create main module 
mummyApp = angular.module('mummyApp', ['ngRoute' , 'ngAnimate']);
>>>>>>> Stashed changes:MummyApp/Scripts/script.js
=======
mummyApp = angular.module('mummyApp', ['ngRoute' , 'ngAnimate']);
>>>>>>> master:MummyApp/Scripts/script.js

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
			//css: '<link rel="stylesheet" href="/Styles/chap1.css">' WHY THIS DOES NOT WORK?
		})

		//Chap 2 Natural Mummies
		.when('/NaturalMummies' , {

			templateUrl: 'Views/NaturalMummies.html' ,
			controller : 'chap2Ctrl'
		});

});


<<<<<<< HEAD:MummyApp/script.js
<<<<<<< Updated upstream:MummyApp/script.js
//Scope injection - Routes DEFINED
=======
//Scope injection - Routes DEFINED in Controllers Folder

>>>>>>> master:MummyApp/Scripts/script.js
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

<<<<<<< HEAD:MummyApp/script.js
=======
//Scope injection - Routes DEFINED in Controllers Folder


//HTML5 History API - Change route of the URL w/o refreshing the page


>>>>>>> Stashed changes:MummyApp/Scripts/script.js
=======
//HTML5 History API - Change route of the URL w/o refreshing the page
$locationProvider.html5Mode(true);


>>>>>>> master:MummyApp/Scripts/script.js












