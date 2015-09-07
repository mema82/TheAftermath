//Creating another module that is a filter that make CAPS from lowercase input
angular.module('SimpleFilters', []) //New module with name
.filter('altCaps', function() { //add .filter function
	return function(input) { //retutn this input
		var charArray = input.split(''); //Regular JS .split  method to seperate intput into strings
		charArray = charArray.map(function(element, index) { //Use .map JS to Set the input result
			return index %2 === 0 ? element.toLowerCase(element) : element.toUpperCase(element);//return the set/'mapped' result and filter to make UpperCase
		});
		return charArray.join(''); // returns a joined array
	};
});