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
    .when('/ngRepeat', {
        templateUrl: 'views/ngRepeat.html',
        })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(false);
  	})
	.controller('MainCtrl', function($scope, $timeout){
    $scope.repeatData = [
    {'num':'0'},
    {'num':'1'},
    {'num':'2'},
    {'num':'3'},
    {'num':'4'},
    {'num':'5'},
    {'num':'6'},
    {'num':'7'},
    {'num':'8'},
    {'num':'9'},
    {'num':'10'},
        {'num':'0'},
    {'num':'1'},
    {'num':'2'},
    {'num':'3'},
    {'num':'4'},
    {'num':'5'},
    {'num':'6'},
    {'num':'7'},
    {'num':'8'},
    {'num':'9'},
    {'num':'10'},
    ];

	});