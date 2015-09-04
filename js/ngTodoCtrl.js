//Each route will have it's different Controlers
//Check out Angular UI router, not the default router

ngTodo.controller('ngTodoCtrl', function ngTodoCtrl($scope){ //$scope is a dependency being injected. I can also use my custom services.
	$scope.todos = [
		{val: "China", completed: false},
		{val: "Japan", completed: true},
		{val: "Korea", completed: false},
		{val: "Amsterdam", completed: true},
		{val: "Europe", completed: false}
	];

	//Adding some functions

	$scope.addNewTask = function() {
		//Add (push) a new task to be the value of 'newTask' in the scope obj
		$scope.todos.push({completed: false, val: $scope.newTask });
		//After adding task in input, clear out the input
		$scope.newTask = '';

	};

});

/*If you want info available on the templating side, it neesd to be on the Scope object. You can add JS
off the Scope and it will be available but just not on template access.*/