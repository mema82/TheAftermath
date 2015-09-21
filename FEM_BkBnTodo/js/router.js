//Running BB Router and immediately extending itself
window.TodoApp = new (Backbone.Router.extend({
	routes: { '' : 'index'}, //when base route ('') run the index function/controller
	initialize: function() { //init the following
		this.todoItems = new TodoItems();
		this.todosView = new TodosView({collection: this.todoItems});
		this.todosView.render();// start everything off with a first Render
	},

	index: function() {
		//Add fixture data
		var fixtures = [
		{ val: "Apples", completed: true},
		{ val: "Bananna", completed: false},
		{ val: "Pear", completed: true},
		{ val: "Peach", completed: false}
		];

		$('#app').html(this.todosView.el);
		this.todoItems.reset(fixtures); //Reset will just fill out with updated model
	},
	
	start: function() { // To load all BB first
		Backbone.history.start(); //then track html history. Html push states.
	}
}));