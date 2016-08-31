var gulp            = require('gulp');
var concat          = require('gulp-concat');
var source          = require('vinyl-source-stream');
var sass            = require('gulp-sass');
var minifyCss       = require('gulp-minify-css');
var uglify          = require('gulp-uglify');
var mainBowerFiles  = require('gulp-main-bower-files');
var flatten         = require('gulp-flatten');
var filter          = require('gulp-filter');
var jshint          = require('gulp-jshint');
var stylish         = require('jshint-stylish');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var ngAnnotate      = require('gulp-ng-annotate');
var Server          = require('karma').Server;
var runSequence     = require('run-sequence');
var clean           = require('gulp-clean');
var runSequence     = require('run-sequence');


gulp.task('libs', function () {
    var jsFilter    = filter('**/*.js', {restore: true});
    var cssFilter   = filter('**/*.css', {restore: true});

    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            includeDev : true,
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.js',
                        './dist/css/*.min.*',
                        './dist/fonts/*.*'
                    ]
                }
            }
        }))
        .pipe(jsFilter)
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/libs/'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('./public/libs'));
});

gulp.task('icons', function () {
    return gulp.src('./bower_components/bootstrap/dist/fonts/**.*')
        .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('js', function () {
  return gulp.src('./src/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(ngAnnotate())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function () {
    return gulp.src('./src/app/**/*.scss')
        .pipe(sass())
        .pipe(rename({ dirname: '/' }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css', ['sass'], function () {
    return gulp.src('./public/css/style.css')
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('view', function () {
    return gulp.src('./src/app/**/*.html')
        .pipe(gulp.dest('./public/'))
});

gulp.task('image', function () {
    return gulp.src(['./src/app/assets/images/*.jpg', './src/app/assets/images/*.ico' ])
        .pipe(gulp.dest('./public/assets/images'));
});

gulp.task('watch', function () {
    gulp.watch('bower.json', ['libs']);
    gulp.watch('./src/app/**/*.js', ['js']);
    gulp.watch('./src/app/**/*.css', ['css']);
    gulp.watch('./src/app/**/*.html', ['view']);
});

gulp.task('clean', function () {
    return gulp.src('./public/', {read: false})
        .pipe(clean());
});

gulp.task('karma', function (done) {
    return new Server({
        configFile: __dirname + '/src/tests/karma.config.js',
        singleRun: true
    }, done).start();
});

gulp.task('angular', ['icons', 'libs', 'css', 'view', 'js', 'image']);

gulp.task('default', ['clean']);

gulp.task('build', function () {
    runSequence('default', ['angular'], 'watch');
    console.log('Gulp run!');
});

gulp.task('test', ['karma'], function () {
    console.log('Tests run!');
})
