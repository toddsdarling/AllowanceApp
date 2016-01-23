'use strict';

angular.module('UserService', [])

.factory('UserService', function($http) {

	var service = {};

	var _baseURL = 'http://localhost:3000/api';

	//get user function...needs to pass a callback from the controller so it
	//will get called
	var _getUsers = function(whichCallBack) {

	    //make the AJAX call to the API to get the users
	    $http({
	        method: 'GET',
	        url: _baseURL + '/users'
	    }).success(function (data) {	       
	        whichCallBack(data);
	    }).error(function (error, data) {
            console.log('OOPS!', error, data);
            whichCallBack(data);
	    });

	}

	service.getUsers = _getUsers;

	return service;

});