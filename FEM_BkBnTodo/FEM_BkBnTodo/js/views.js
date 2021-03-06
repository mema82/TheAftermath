window.TodoView = Backbone.View.extend({

//This change occurs on underlying model (CONTEXT IS EVERYTHING)
	initialize: function() { //if any changes on 'this' model gp and re-render yourself
		this.model.on('change', this.render, this);
	},

	//create event obj. This CHANGE occurs on DOM. The Views checkbox for toggle (CONTEXT IS EVERYTHING)
	events: {
		'change input[type=checkbox]' : 'toggle', //any changes on checkboxes ONLY. Would normally do on class or IDs.
		'change .form-control' : 'update',//Updates underlying modes -  2-way data binding
		'click .btn-danger' : 'remove'
	},

	update: function() {
		this.model.updateText(this.$('.form-control').val()); //Updates underlying modes from within selected . view
	},

	remove: function() {
		this.model.destroy(); //destroy is a BkBn function. Just tell what to do on the destroy event
	},

	toggle: function() {
		this.model.toggle();
	},

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
	initialize: function() { //below are event listeners for the collection/model Level
		this.collection.on('add', this.addOne, this); //do this on add
		this.collection.on('reset', this.addAll, this);//do this on reset
		this.collection.on('destroy', this.render, this);//do this on destroy
	},

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
	},

	filterCompleted: function() {
		this.collection.filterCompleted();
		this.render();
		}
});