window.TodoView = Backbone.View.extend({
	template: _.template('<span class="input-group-addon"><input <%= completed ? "checked=checked" : "" %> type="checkbox"></span><input value="<%= val %>" class="form-control<%= completed ? " finished" : "" %>" type="text"><span class="input-group-btn"><button class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>'),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));//'el'JS wrapped DOM node to operate on
		return this;
	},
	//Dive encapsulates below. Using this to effect those class names
	className: 'input-group input-group-lg'
});

//Display ONE Item - All below mimics the ng-repeat directive
window.TodosView = Backbone.View.extend({
	addOne: function(todoItem){
		var todoView = new TodoView({model: todoItem}); //the info is from model
		this.$el.append(todoView.render().el); //appends to list and renders
	},

//Add all 
	addAll: function() {
		this.$el.empty(); //Clears input
		//collection refers to underlying collection
		this.collection.forEach(this.addOne, this);//this adds collection in 'this' input
	},

//Render all
	render: function() { //adds all and renders for return
		this.addAll();
		return this;
	}
});