'use strict';

/* App Module */

var fabienfleureauApp = angular.module('fabienfleureauApp', [ 'ngRoute' ]);

fabienfleureauApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/contact', {
		templateUrl : 'views/contact.html',
		controller : 'ContactController'
	})
	.when('/news', {
		templateUrl : 'views/news.html',
		controller : 'NewsController'
	})
	.when('/portfolio', {
		templateUrl : 'views/portfolio.html',
		controller : 'PortfolioController'
	})
	.otherwise({
		templateUrl : 'views/home.html',
		controller : 'MainController'
	});
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});

fabienfleureauApp.directive('twitterTimeline', [function() {
	return {
		restrict: 'A',
		scope: {
			cssUrl: "@",
			autoResize: "="
		},
		link: function (scope, element, attrs) {
			$('body').removeAttr('data-twttr-rendered');

			element
				.attr('id', 'twitter-feed')
				.attr("width", "100%" || attrs.width)
				.attr('data-chrome', 'transparent')
				.attr('data-widget-id', attrs.twitterTimeline)
				.addClass('twitter-timeline');

			function render() {
				var body = $('.twitter-timeline').contents().find('body');

				
			}

			if (!$('#twitter-wjs').length) {
				$.getScript((/^http:/.test(document.location)?'http':'https') + '://platform.twitter.com/widgets.js', function() {
					render();
					$('.twitter-timeline').load(render);
        		});
			}
		}
	};
}]);