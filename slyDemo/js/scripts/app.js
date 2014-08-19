var angularSlyDemo = angular.module('angular-sly-demo',['ngRoute','angular-sly'])
	  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
    	.when('/', {
    		templateUrl: 'views/landing.html',
    	})
    	.when('/horizontal', {
    		templateUrl: 'views/horizontal.html',
      	})
      .when('/vertical', {
        templateUrl: 'views/vertical.html',
        })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(false);
  	})
	.controller('MainCtrl', function($scope){

	});