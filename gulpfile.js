	var gulp = require('gulp'),
	uglify 		= require('gulp-uglify'),
	concat		= require('gulp-concat'),
	rename		= require('gulp-rename'),
	ngmin		= require('gulp-ngmin')
	// ngAnnotate		= require('gulp-ng-annotate');

gulp.task('build', function() { 
	return gulp.src(['src/angular-sly.js','src/slyDrtv.js'])
		.pipe(concat('angular-sly.js'))
		.pipe(ngmin())
		.pipe(gulp.dest('dist'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('dist'))
});