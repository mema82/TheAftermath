/** @jsx React.DOM */

var app = app || {}; // app = new app or new object. Use exisitng if not create one and start building


//Wrap all in instantly invoked function expression

(function() {
	'use strict';

	app.init = function() {
		var TodoApp = app.components.TodoApp; //components is available here b.c of declared double assignment in components (line 13)
		React.renderComponent(
			<TodoApp />, /*Turns components into function calls (line 12), now can be used here. 
			Says we want a TodoApp component rendered at the app Id*/
				document.getElementById('app')
			);

	};

	app.init(); // gets app up anf running

})();