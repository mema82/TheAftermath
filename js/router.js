//Running BB Router and immediately extending itself
window.TodoApp = new (Backbone.Router.extend({
	routes: { '' : 'index'}, //when base route ('') run the index function/controller
	index: function() {

	},
	start: function() { // To load all BB first
		Backbone.history.start(); //then track html history. Html push states.
	}

}));