var gulp            = require('gulp');
var concat          = require('gulp-concat');
var browserify      = require('browserify');
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
var del             = require('del');
var mocha           = require('gulp-mocha');
var Server          = require('karma').Server;

gulp.task('uniteLibsFiles', function () {
    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});

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

gulp.task('browserify', function () {
    return browserify({
        entries: ['./src/app/app.js'],
            debug: true
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('js', ['browserify'], function () {
    return gulp.src('./public/js/app.js')
    	  .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./public/js'))
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
    return gulp.src(['./src/app/images/*.jpg', './src/app/images/*.ico' ])
        .pipe(gulp.dest('./public/images'));
});

gulp.task('watch', function () {
    gulp.watch('bower.json', ['uniteLibsFiles']);
    gulp.watch('./src/app/**/*.js', ['js']);
    gulp.watch('./src/app/**/*.css', ['css']);
    gulp.watch('./src/app/**/*.html', ['view']);
    gulp.watch('./src/app/**/*.jpg', ['image']);
});

gulp.task('clean', function () {
    del('./public/**/*');
});

gulp.task('test', function(done){
    return new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('testb', function(){
    return gulp.src(['./tests/app/**/*-spec.js'], {
        read: false
    })
    .pipe(mocha({ reporter: 'list'}));
});

gulp.task('angular', ['image', 'uniteLibsFiles', 'css', 'js', 'view']);

gulp.task('default', ['clean', 'angular', 'watch'], function () {
    console.log('Success!');
});
