//Multiple Models = mult files BUT this is a super short script
window.TodoItem = Backbone.Model.extend({
	toggle: function() {
		this.set('completed', !this.get('completed'));//setting to opposite of completed
	},

	updateText: function (text) { //updated model text
		this.set('val', text);
	}
}); 

//1 Item

window.TodoItems = Backbone.Collection.extend({ //collection of Items
	model: TodoItem,

	initialize: function() {
		this.on('destroy', this.removeElement, this);
	},

	removeElement: function(model) {
		this.remove(model);
	},

	filterCompleted: function() {
		this.remove(this.filter(function(item) { //filters completed out
			return item.get('completed'); 
		}));
	}
});

