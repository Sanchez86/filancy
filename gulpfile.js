const gulp       = require('gulp');
const concat     = require('gulp-concat');
const concatCss  = require('gulp-concat-css');
const gutil      = require('gulp-util');
const cleanCSS   = require('gulp-clean-css');
const watch      = require('gulp-watch');
const imagemin   = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const css_sass   = require('gulp-sass');

// compile all css files to one _css.min.scss and put to SASS directory

gulp.task('sass-compile', function(){
	return gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(css_sass().on('error', css_sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css/'))
});

// compile all css files to one _css.min.scss and put to SASS directory
/*
gulp.task('concat_css', function () {
	return gulp.src([
			'css/bootstrap.min.css',
			'css/animate.css',
			'css/base.css',
			'css/header.css',
			'css/footer.css',
			'css/content.css',
			'css/content-media.css'
		])
		.pipe(concatCss("app_min.css"))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('css'));
});
*/

// optimize images
/*
gulp.task('minify_image', function() {
	gulp.src([
		'images/*.png',
		'images/*.jpeg',
		'images/*.jpg',
		'images/*.gif',
		'images/*.svg'
	])
		.pipe(imagemin([   // https://www.npmjs.com/package/gulp-imagemin
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest('images/min/'))
});
*/


// combine js files
/*
gulp.task('concat_js', function() {
	return gulp.src([
		'js/jquery.min.js',
		'js/wow.min.js',
		'js/bootstrap.min.js',
		'js/main.js'
	])
		.pipe(concat('scripts_min.js'))
		.pipe(gulp.dest('js/min'))
		.on('error', gutil.log);
});
*/

// gulp watch
gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
});