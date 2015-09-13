//placing both controllers her b/c short program, otherwise would make partial

Todos.TodosController = Ember.ArrayController.extend ({
	actions: {
		createNewTodo: function() {
			var newVal = this.get('newTodo'); // gets new todo Val
			var todo = this.store.createRecord('todo' , { //Creates a new todo type
				val: newVal , // gets new val
				completed: false // sets to false completed
			});
			this.set('newTodo', ''); // set new todo to blank and save prev value to list
			todo.save();
		} ,
		clearCompleted: function() {
			var completed = this.filterBy('completed', true);//find all TRUE completed items
			completed.invoke('deleteRecord'); //invoke this deletedRecord on all TRUE completed
			completed.invoke('save'); // Save the view with after deleted TRUE completed items
		}
	}
});

Todos.TodoController = Ember.ObjectController.extend({
	//Will define actions that can happen to the object
	actions: {
		removeTodo: function () {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	}
});