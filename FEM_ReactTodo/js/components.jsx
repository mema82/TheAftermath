/** @jsx React.DOM */

var app = app || {};

app.components = app.components || {}; //sometimes multiple files will be adding components

//IIFE - protects agains global pollution

(function() {
	'use strict';

//root components
	var TodoApp = app.components.TodoApp = React.createClass({
//coming back to add init state
		getInitialState: function() {
			return {
				todos:[]
			};
		},

		componentDidMount: function() {
			var data = app.getData();
			this.setState({todos: data});
			console.log(this.state);
		},


		render: function () {//Adding the 3 components before defining
			return (
				<div className="outer-container">
					<NewTodo
					TodoList 
					todos={this.state.todos} //passing todo prop to todos list component
				/>

					<ClearCompleted />
				</div>
			);
		}
});

//Declaring above components
	var NewTodo = app.components.NewTodo = React.createClass({
		render: function() {

			return(
				<h1>New Todo</h1>
			);
		}
});

var TodoList = app.components.TodoList = React.createClass({
		render: function() {

		return (
			<div className="todos">
			{this.props.todos.map(function(el, index) {

				return (
				<todoItem
					todo={el}//prop on child todo
					index={index} //prop on child todo
				/>
			);
		})};
</div>
		);
	}
});

	var TodoItem = app.components.TodoItem = React.createClass ({
		render: function () {
			var inputClassName = "form-control";
				if (this.props.todo.completed) { //if completed
					inputClassName += " finished"; //give class of finished
		}

		return (
		<div className="input-group input-group-lg">
				<span className="input-group-addon">
				<input checked={this.props.todo.completed} type="checkbox" />//if completed then should be checked
			</span>

			<input type="text" value={this.props.todo.val} className={inputClassName} />
				<span className="input-group-btn">
				<button className="btn btn-danger" type="button">
					<i className="glyphicon glyphicon-remove"></i>
				</button>
			</span>
		</div>
		);
	}
});

	var ClearCompleted = app.components.ClearCompleted = React.createClass({
	render: function() {

	return (
		<h1>Clear Completed</h1>
		);
	}
});
})();


