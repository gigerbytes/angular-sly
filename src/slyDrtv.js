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
	clickBar: 1,

};

//DIRECTIVE PROPER
angularSly.directive('slyHorizontal', function(){
	return {
		restrict: 'A',
		link: function (scope, el, attrs){
			var frame = $(el);
			var wrap  = $(el[0]).parent();

			defaultOptions.horizontal = 1;

			var defaultControls = {
				scrollBar: wrap.find('.scrollbar') || null,
				pagesBar: wrap.find('.pages') || null,
				forward: wrap.find('.forward') || null,
				backward: wrap.find('.backward') || null,
				prev: wrap.find('.prev') || null,
				next: wrap.find('.next') || null,
				prevPage: wrap.find('.prevPage') || null,
				nextPage: wrap.find('.nextPage') || null,
			}
			// Merge parts into options object for sly argument
			var options =  $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
			var callback = scope.$eval(attrs.slyCallback) || function(cb){};
			// Call Sly on frame
			frame.sly(options, callback());

		},
	}
});

angularSly.directive('slyVertical', function(){
	return {
		restrict: 'A',
		link: function (scope, el, attrs){
			var frame = $(el);
			var wrap  = $(el[0]).parent();
			defaultOptions.horizontal = 0;

			var defaultControls = {
				scrollBar: wrap.find('.scrollbar') || null,
				pagesBar: wrap.find('.pages') || null,
				forward: wrap.find('.forward') || null,
				backward: wrap.find('.backward') || null,
				prev: wrap.find('.prev') || null,
				next: wrap.find('.next') || null,
				prevPage: wrap.find('.prevPage') || null,
				nextPage: wrap.find('.nextPage') || null,
			}
			
			// Merge parts into options object for sly argument
			var options =  $.extend({}, defaultOptions, defaultControls, scope.$eval(attrs.slyOptions));
			var callback = scope.$eval(attrs.slyCallback) || function(cb){};
			// Call Sly on frame
			frame.sly(options, callback());
		},
	}
});
