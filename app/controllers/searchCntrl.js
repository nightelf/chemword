elementInfo.controller('searchCntrl', ['$scope', 'matchFinder', 'elementInfo', function($scope, matchFinder, elementInfo) {
	$scope.results = [];
	$scope.$watch('search', function(newValue, oldValue) {
       $scope.results = matchFinder.find(newValue);
	});
}]);