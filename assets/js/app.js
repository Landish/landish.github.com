/**
 * Initialize AngularJS Module
 * @type {[type]}
 */
var APP = angular.module('GithubApp', []);


/**
 * Title Function
 * Replace Dashes with Space
 * @return {[type]} [description]
 */
APP.filter('title', function() {
	var regex = new RegExp('-', 'g');
	return function(text) {
		return text.replace(regex, ' ');
	};
});


/**
 * Module Route Configuration
 * @param  {[type]} $routeProvider [description]
 * @return {[type]}                [description]
 */
APP.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'assets/views/repos.html',
			controller: 'ReposController'
		})

		.when('/repositories', {
			templateUrl : 'assets/views/repos.html',
			controller: 'ReposController'
		})
		
		.when('/gists', {
			templateUrl : 'assets/views/gists.html',
			controller: 'GistsController'
		})

		.otherwise({ redirectTo: '/' })
});

/**
 * Loading
 * @param  {[type]} $rootScope [description]
 * @return {[type]}            [description]
 */
APP.service('Loading', function($rootScope) {

	/**
	 * Show Loading
	 * @return {[type]} [description]
	 */
	this.show = function() {
		$rootScope.loading = true;
	};

	/**
	 * Hide Loading
	 * @return {[type]} [description]
	 */
	this.hide = function() {
		$rootScope.loading = false;
	};

	/**
	 * Set Message and Show Loading
	 * @param  {[type]} message [description]
	 * @return {[type]}         [description]
	 */
	this.message = function( message ) {
		$rootScope.message = message;
		this.show();
	};

});

