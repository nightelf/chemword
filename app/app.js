angular.module('chemglyph', ['ngRoute', 'chemglyph.search', 'chemglyph.relations'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/search', {
				templateUrl: 'static/partials/search/search.html',
				controller: 'searchCntrl'
			}).when('/about', {
				templateUrl: 'static/partials/relations/about.html',
				controller: 'AboutController'
			}).when('/feedback', {
				templateUrl: 'static/partials/relations/feedback.html',
				controller: 'FeedbackController'
			})
			.otherwise({redirectTo:'/search'});
			
		$locationProvider.html5Mode(true);
	}]);