//create main modulevar 
myApp = angular.module('mummyApp', []);

//Scope injection
mummyApp.controller('mainCtrl' , function($scope) {

	//messege to show which view your on
	$scope.message = "This is the main ctrl!";
});