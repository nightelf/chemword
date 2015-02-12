chemglyph = angular.module('chemglyph', ['ngRoute', 'elementInfo'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'app/partials/search.html',
			controller: 'searchCntrl'
		}).when('/contact', {
			templateUrl: 'app/partials/feedback.html',
			controller: 'FeedbackController'
		})
		.otherwise({redirectTo:'/'});
		
	$locationProvider.html5Mode(true);
}]);