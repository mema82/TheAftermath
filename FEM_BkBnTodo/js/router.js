//Running BB Router and immediately extending itself
window.TodoApp = new (Backbone.Router.extend({
	routes: { '' : 'index'}, //when base route ('') run the index function/controller
	initialize: function() { //init the following
		this.todoItems = new TodoItems();
		this.todosView = new TodosView({collection: this.todoItems});
		this.todosView.render();// start everything off with a first Render

		//using JQ outside of app render view. Btn is in index so we have to handle somehow.
		$('.btn-clear').click(function(e) {
			window.TodoApp.todosView.filterCompleted()
		});

		$('.btn-success').click(function() {
			window.TodoApp.todoItems.add({val:$("#newTodo").val(), completed: false}); //Add new value in todo on click
			$("#newTodo").val(''); //clear it out
		});
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
