'use strict';

angular.module('DashboardCtrl', ['UserService'])

.controller('DashboardCtrl', function($scope, UserService) {

	//init users as empty array
	$scope.users = [];

	$scope.showUsers = function(data) {
		$scope.users = data.users;
	}

	//call the get users method of the service to build
	//the dashboard
	UserService.getUsers($scope.showUsers);

});





/*
(function() {

angular.module('Allowance').controller('DashboardCtrl', function($scope) {

	var vm = this;

	//init users as empty array
	$scope.users = [];

	$scope.getUsers = function() {

		//make call to DB/local storage here

		//return JSON and set scope.users = result
		var usersFromDB = [
			{
				'name': 'Gavin',
				'imageUrl': '',
				'total': '$100'
			},
			{
				'name': 'Alley',
				'imageUrl': '',
				'total': '$50'
			}
		];

		//transform results
		for (var i = usersFromDB.length - 1; i >= 0; i--) {
			var user = usersFromDB[i];

			if (user.imageUrl === '') {
				//input default url if url is missing
				user.imageUrl = 'img/user.png';
			}
		};

		$scope.users = usersFromDB;


	}


	$scope.getUsers();

});

})(); */
