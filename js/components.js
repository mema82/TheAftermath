Todos.TodoEntryComponent = Ember.Component.extend({
	actions: {
		click: function(){
			this.sendAction('remove'); //Call remove action and passes through remove on view
		}		
	}
});