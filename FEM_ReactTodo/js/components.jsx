/** @jsx React.DOM */

var app = app || {};

app.components = app.components || {}; //sometimes multiple files will be adding components

//IIFE - protects agains global pollution

(function() {

'use strict';

	//root components
	var TodoApp = app.components.TodoApp = React.createClass({ //root component
		render: function () {
			return (
			<div className="outer-container"> 
				<NewTodo />
				<TodoList />
				<clearCompleted />
			</div>
			);
		}
	});
	var NewTodo = app.components.NewTodo = React.createClass({
		render: function () {
			return(
				<h1>NewTodo</h1>
				);
		}
	});

	var TodoList = app.components.TodoList = React.createClass({
		render: function () {
			return(
				<h1>Todo List</h1>
				);
		}
	});

	var clearCompleted = app.components.clearCompleted = React.createClass({
		render: function () {
			return(
				<h1>Clear Completed</h1>
				);
		}
	});

	})();
