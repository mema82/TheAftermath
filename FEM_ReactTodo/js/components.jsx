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
				
				<NewTodo />
				<TodoList 
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

			return(
				<h1>Todo List </h1>
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



