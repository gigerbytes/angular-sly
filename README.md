angular-sly
===========

Angular directives for the [Sly](http://github.com/darsain/sly) javascript library

I have only ported horizontal and vertical scrolling, so far.
## Installlation: 
 
```
bower install angular-sly
```
##Usage:

###Sly Frame
For normal lists:
Set `sly-horizontal` or `sly-vertical` as an attribute to the frame of your slidee. e.g.
```
	<div class="frame" sly-horizontal id="basicSly">
```

If you are using ng-repeat:
Set `sly-horizontal-repeat` or `sly-vertical-repeat` as an attribute of the tag with ng-repeat e.g.

```
	<li ng-repeat="box in repeatData" sly-horizontal-repeat >{{box.num}}</li>
```

'sly-options' is an object that will allow you to set the custom options. The default options are:

```
{
  horizontal: 1 // or 0 depending on sly-horizontal or sly-vertical
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
```

An example from horizontal.html:
```
 <div class="frame" sly-horizontal id="basicSly">
 	...
 </div>
```

The directive will try to evaluate all default control classes or set the value to null. 
Note: if you have different class names for the default controls, specify them in sly-options. 
###Methods

I have implemented the following methods: 

* toCenter() 	: sly-to-center 	: moves to center
* toStart() 	: sly-to-begin 		: moves to first element
* toEnd() 		: sly-to-end 		: moves to last element

All methods can take arguments with sly-data-item="number", which will move that item to the center, first, or last element of the view.

Note that sly-data-item is optional and it defaults to either the middle, the first or the last element.
See the following example from horiontal.html
```
<!-- will set slide 10 as the first element in the view frame -->
<button class="btn toStart" sly-to-begin sly-frame="basicSly" sly-data-item="10"><strong>10</strong> toStart</button>
```


License: MIT
