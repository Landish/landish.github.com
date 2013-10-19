var APP = angular.module('GithubApp', []);


APP.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.repoUrl = 'https://api.github.com/users/Landish/repos?client_id=306c0c212db97ef0383f&client_secret=84027fe50405b0c4cf16943abf0e113710cd97ab';
	$scope.gistsUrl = 'https://api.github.com/users/Landish/gists';
	$scope.oAuth = 'https://api.github.com/user?token=84c077397157be4a464ea59448f59f17167310d2';

	$scope.repos = [];
	$scope.gists = [];
	$scope.loading = true;

	$http.get($scope.repoUrl).success(function(data, status) {		
		$scope.repos = data;
		$scope.loading = false;
	}).error(function(data, status) {
		console.log(data);
		$scope.message = data.message;
	});

}]);
