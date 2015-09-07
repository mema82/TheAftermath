/*Decalring another ang module seperately from app. This is a general purpose directive
to change color of 'X' depending if its completed or not.
*/
angular.module('simpleDirecives', []).directive('completeColor', function() {
	return {
		restrict: 'A',  //Event to restrict a return of Attribute. Can also use 'E' for Event or 'AE'
		//Link function to tell what it does upon rendering
		link: function (scope, element, attrs) {
			//define watch to watch if the 'completeColor' changes.If so, run this function to effect the css element.
			scope.$watch(attrs.completeColor, function (value) {
				//Will be yellow or green based on its boolean value
				elements.css('color', (value ? 'yellow' : 'limegreen'));
			});
		}
	}
});