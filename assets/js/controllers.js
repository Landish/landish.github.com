APP.controller('MainController', ['$scope', 'Loading', function($scope, Loading) {

	
	Loading.show();

	$scope.tabs = {
		repos : {
			active: true
		},
		gists : {
			active: false
		}
	};

}]);


/**
 * Repositories Controller
 * @param  {[type]} $scope     [description]
 * @param  {[type]} $http      [description]
 * @return {[type]}            [description]
 */
APP.controller('ReposController', ['$scope', '$http', 'Loading', function($scope, $http, Loading) {

	Loading.show();

	$scope.tabs.repos.active = true;
	$scope.tabs.gists.active = false;

	$scope.repoUrl = 'https://api.github.com/users/Landish/repos';

	$scope.load = function() {		

		$http.get($scope.repoUrl, { cache: true }).success(function(data) {

            $scope.repos = data.filter(function(item) {
                return item.fork == false;
            });

			Loading.hide();
						
		}).error(function() {
			Loading.message('Couldn\'t Load Repositories! <br /> Instead, please visit: <a href="https://github.com/Landish?tab=repositories" target="_blank">https://github.com/Landish</a>');
		});	
	};

	$scope.load();

}]);


/**
 * Gists Controller
 * @param  {[type]} $scope     [description]
 * @param  {[type]} $http      [description]
 * @return {[type]}            [description]
 */
APP.controller('GistsController', ['$scope', '$http', 'Loading', function($scope, $http, Loading) {

	Loading.show();

	$scope.tabs.gists.active = true;
	$scope.tabs.repos.active = false;

	$scope.gistsUrl = 'https://api.github.com/users/Landish/gists';

	$scope.load = function() {		

		$http.get($scope.gistsUrl, { cache: true }).success(function(data) {

            $scope.gists = data.filter(function(item) {
                return item.description != null;
            });

			Loading.hide();					

		}).error(function() {
			Loading.message('Couldn\'t Load Gists! <br /> Instead, please visit: <a href="https://gist.github.com/Landish" target="_blank">https://gist.github.com/Landish</a>');
		});	
	};

	$scope.load();

}]);