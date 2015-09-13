/** @jsx React.DOM */

var app = app || {};

app.components = app.components || {}; //sometimes multiple files will be adding components

//IIFE - protects agains global pollution

(function() {
	'use strict';

//root components
var TodoApp = app.components.TodoApp = React.createClass({
	render: function () {
		return (
			<div className="outer-container">
				//Adding the 3 components before defining
				<NewTodo />
				<TodoList />
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

			return(
				<h1>Clear Completed</h1>
				);
		}
	});

})();



