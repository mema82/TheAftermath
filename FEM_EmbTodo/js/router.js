Todos.Router.map(function () {
	this.resource('todos', {path: '/'});
});

//All Route controller objects will go below here
Todos.TodosRoute = Ember.Route.extend({
	model: function() { // data
		return this.store.find('todo'); // return all my todos found in the store
	}
});