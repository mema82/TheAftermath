window.TodoView = Backbone.View.extend({
	template: _.template('<span class="input-group-addon"><input <%= completed ? "checked=checked" : "" %> type="checkbox"></span><input value="<%= val %>" class="form-control<%= completed ? " finished" : "" %>" type="text"><span class="input-group-btn"><button class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>'),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));//'el'JQ wrapped DOM node to operate on
		return this;
	}
	//Dive encapsulates below. Using this to effect those class names
	className: 'input-group input-group-lg'
});