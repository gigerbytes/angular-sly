var angularSly = angular.module('angular-sly', [
    'ngRoute',
    'angular-sly'
  ]).config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider.when('/', { templateUrl: 'views/landing.html' }).when('/horizontal', { templateUrl: 'views/horizontal.html' }).when('/vertical', { templateUrl: 'views/vertical.html' }).when('/ngRepeat', { templateUrl: 'views/ngRepeat.html' }).otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(false);
    }
  ]).controller('MainCtrl', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
      $scope.repeatData = [
        { 'num': '0' },
        { 'num': '1' },
        { 'num': '2' },
        { 'num': '3' },
        { 'num': '4' },
        { 'num': '5' },
        { 'num': '6' },
        { 'num': '7' },
        { 'num': '8' },
        { 'num': '9' },
        { 'num': '10' },
        { 'num': '0' },
        { 'num': '1' },
        { 'num': '2' },
        { 'num': '3' },
        { 'num': '4' },
        { 'num': '5' },
        { 'num': '6' },
        { 'num': '7' },
        { 'num': '8' },
        { 'num': '9' },
        { 'num': '10' }
      ];
    }
  ]);
'use strict';
//DEFAULTS
var defaultOptions = {
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
  };
//DIRECTIVE PROPER
/**
* for general lists
*/
angularSly.directive('slyHorizontal', function () {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      $(window).on('resize', function () {
        frame.sly('reload');
      });
      var frame = $(el);
      var wrap = $(el[0]).parent();
      defaultOptions.horizontal = 1;
      var defaultControls = {
          scrollBar: wrap.find('.scrollbar') || null,
          pagesBar: wrap.find('.pages') || null,
          forward: wrap.find('.forward') || null,
          backward: wrap.find('.backward') || null,
          prev: wrap.find('.prev') || null,
          next: wrap.find('.next') || null,
          prevPage: wrap.find('.prevPage') || null,
          nextPage: wrap.find('.nextPage') || null
        };
      // Merge parts into options object for sly argument
      var options = $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
      var callback = scope.$eval(attrs.slyCallback) || function (cb) {
        };
      // Call Sly on frame
      frame.sly(options, callback());  //         scope.$emit('ngRepeatFinished');
                                       //     });
                                       // }
    }
  };
});
angularSly.directive('slyVertical', function () {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      var frame = $(el);
      var wrap = $(el[0]).parent();
      defaultOptions.horizontal = 0;
      var defaultControls = {
          scrollBar: wrap.find('.scrollbar') || null,
          pagesBar: wrap.find('.pages') || null,
          forward: wrap.find('.forward') || null,
          backward: wrap.find('.backward') || null,
          prev: wrap.find('.prev') || null,
          next: wrap.find('.next') || null,
          prevPage: wrap.find('.prevPage') || null,
          nextPage: wrap.find('.nextPage') || null
        };
      // Merge parts into options object for sly argument
      var options = $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
      var callback = scope.$eval(attrs.slyCallback) || function (cb) {
        };
      // Call Sly on frame
      frame.sly(options, callback());
    }
  };
});
/** directives for ng-repeat
* set to the ng-repeat row
* checks if the last item is rendered before calling sly
*/
angularSly.directive('slyHorizontalRepeat', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, el, attrs) {
        $(window).on('resize', function () {
          frame.sly('reload');
        });
        if (scope.$last === true) {
          $timeout(function () {
            var frame = $(el[0]).parent().parent();
            var wrap = $(el[0]).parent().parent().parent();
            defaultOptions.horizontal = 1;
            var defaultControls = {
                scrollBar: wrap.find('.scrollbar') || null,
                pagesBar: wrap.find('.pages') || null,
                forward: wrap.find('.forward') || null,
                backward: wrap.find('.backward') || null,
                prev: wrap.find('.prev') || null,
                next: wrap.find('.next') || null,
                prevPage: wrap.find('.prevPage') || null,
                nextPage: wrap.find('.nextPage') || null
              };
            // Merge parts into options object for sly argument
            var options = $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
            var callback = scope.$eval(attrs.slyCallback) || function (cb) {
              };
            // Call Sly on frame
            frame.sly(options, callback());  //         scope.$emit('ngRepeatFinished');
          });
        }
      }
    };
  }
]);
angularSly.directive('slyVerticalRepeat', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, el, attrs) {
        if (scope.$last === true) {
          $timeout(function () {
            var frame = $(el[0]).parent().parent();
            var wrap = $(el[0]).parent().parent().parent();
            defaultOptions.horizontal = 0;
            var defaultControls = {
                scrollBar: wrap.find('.scrollbar') || null,
                pagesBar: wrap.find('.pages') || null,
                forward: wrap.find('.forward') || null,
                backward: wrap.find('.backward') || null,
                prev: wrap.find('.prev') || null,
                next: wrap.find('.next') || null,
                prevPage: wrap.find('.prevPage') || null,
                nextPage: wrap.find('.nextPage') || null
              };
            // Merge parts into options object for sly argument
            var options = $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
            var callback = scope.$eval(attrs.slyCallback) || function (cb) {
              };
            // Call Sly on frame
            frame.sly(options, callback());
          });
        }
      }
    };
  }
]);
//METHODS
//Positioning
angularSly.directive('slyToBegin', function () {
  //slyToStart doesnt seem to work :( 
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.on('click', function () {
        // Need to pass the sly frame element Id
        var frame = $('#' + attrs.slyFrame);
        var item = attrs.slyDataItem || undefined;
        // Animate a particular item to the start of the frame.
        // If no item is provided, the whole content will be animated.
        frame.sly('toStart', item);
      });
    }
  };
});
angularSly.directive('slyToCenter', function () {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.on('click', function () {
        // Need to pass the sly frame element Id
        var frame = $('#' + attrs.slyFrame);
        var item = attrs.slyDataItem || undefined;
        // Animate a particular item to the center of the frame.
        // If no item is provided, the whole content will be animated.
        frame.sly('toCenter', item);
      });
    }
  };
});
angularSly.directive('slyToEnd', function () {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.on('click', function () {
        // Need to pass the sly frame element Id
        var frame = $('#' + attrs.slyFrame);
        var item = attrs.slyDataItem || undefined;
        // Animate a particular item to the center of the frame.
        // If no item is provided, the whole content will be animated.
        frame.sly('toEnd', item);
      });
    }
  };
});