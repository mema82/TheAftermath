//Multiple Models = mult files BUT this is a super short script
window.TodoItem = Backbone.Model.extend({}); //1 Item

window.TodoItems = Backbone.collection.extend({ //collection of Items
	model: TodoItem;
});

