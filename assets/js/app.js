var app = angular.module('GithubApp', []);


app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$http.get('https://api.github.com/users/Landish/repos').success(function(data, status) {
		console.log(data);
	});

}]);
