'use strict';

/* App Module */

var fabienfleureauApp = angular.module('fabienfleureauApp', [ 'ngRoute' ]);

fabienfleureauApp.config(function($routeProvider) {
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
});