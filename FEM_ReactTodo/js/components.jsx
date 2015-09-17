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
				<p>Cool stuff</p>
			</div>
			);
		}

	});

})();




















