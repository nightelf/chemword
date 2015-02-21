angular.module('chemglyph.search')
	.controller('searchCntrl', ['$scope', 'matchFinder', function($scope, matchFinder) {
		$scope.results = [];
		$scope.$watch('search', function(newValue, oldValue) {
			
		   $scope.results = matchFinder.find(newValue);
		});
	}]);