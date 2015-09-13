//Multiple Models = mult files BUT this is a super short script
window.TodoItem = Backbone.Model.extend({
	toggle: function() {
		this.set('completed', !this.get('completed'));//setting to opposite of completed
	}
}); 

//1 Item

window.TodoItems = Backbone.Collection.extend({ //collection of Items
	model: TodoItem,
	filterCompleted: function() {
		this.remove(this.filter(function(item) { //filters completed out
			return item.get('completed'); 
		}));
	}
});

