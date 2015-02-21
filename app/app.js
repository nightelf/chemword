angular.module('chemglyph', ['ngRoute', 'chemglyph.search', 'chemglyph.relations'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'static/partials/search/search.html',
				controller: 'searchCntrl'
			}).when('/feedback', {
				templateUrl: 'static/partials/feedback/feedback.html',
				controller: 'FeedbackController'
			})
			.otherwise({redirectTo:'/'});
			
		$locationProvider.html5Mode(true);
	}]);