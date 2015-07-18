angular.module('chemglyph.search')
	.controller('searchCntrl', ['$scope', 'matchFinder', 'elementInfo', function($scope, matchFinder, elementInfo) {

		$scope.elementInfo = elementInfo;
		$scope.results = [];
		$scope.$watch('search', function(newValue, oldValue) {
			
		   $scope.results = matchFinder.find(newValue);
		});
	}]);