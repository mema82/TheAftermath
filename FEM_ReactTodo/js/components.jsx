/** @jsx React.DOM */

var app = app || {};
app.components = app.components || {}; //sometimes multiple files will be adding components

//IIFE - protects agains global pollution

(function() {

'use strict';

	//root components
	var TodoApp = app.components.TodoApp = React.createClass({ //root component
		getInitialState: function() {
			return {
				todos: [] //returns an Object that has a todos
			};
		},

		componentDidMount: function () {
			var data = app.retrieveData();
			this.setState({todos: data});
		},

		render: function () {
			return (
			<div className="outer-container"> 
				<NewTodo />
				<TodoList //Component
				todos={this.state.todos} //run this expression as a prop on my todo
				/>
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
			return (
				<div className="todos">
				{this.props.todos.map(function(el, index) { //eqiv of ng-repeat in list in vanilla JS. Matches up with above todos
					return (
						<TodoItem
						todo={el}
						index={index}
						/>

						);
				})}
					</div>
			);
		}
	});

		var TodoItem =app.components.TodoItem = React.createClass({
			render: function () {
				var inputClassName = "form-control";
				if (this.props.todo.completed) {
					inputClassName += " finished";
				}

				return (
					<div className="input-group input-group-lg">
						<span className="input-group-addon">
							<input checked={this.props.todo.completed} type="checkbox" />
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


	var clearCompleted = app.components.clearCompleted = React.createClass({
		render: function () {
			return(
				<h1>Clear Completed</h1>
				);
		}
	});

	})();
