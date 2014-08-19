angular-sly
===========

Angular directives for the (Sly)[http://github.com/darsain/sly] javascript library

I have only ported horizontal and vertical scrolling, so far.

##Usage:

Set 'sly-horizontal' or 'sly-vertical' as an attribute to the frame of your slidee.

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
The directive will try to evaluate all default control classes or set the value to null. 
Note: if you have different class names for the default controls, specify them in sly-options. 

License: MIT
