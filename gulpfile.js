"use strict";


(function () {
    var gulp = require('gulp'),
        rename = require('gulp-rename'),
        notify = require('gulp-notify'),
        autoprefixer = require('gulp-autoprefixer'),
        connect = require('gulp-connect'),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        nunjucks = require('gulp-nunjucks-html'),
        watch = require('gulp-watch'),
        ts = require('gulp-typescript'),
        consolidate = require('gulp-consolidate'),
        iconfont = require('gulp-iconfont'),
        imagemin = require('gulp-imagemin'),
        minify = require('gulp-minify'),
        gulpArgs = require('get-gulp-args')();
    var env = gulpArgs.env || 'demo';

    gulp.task('connect', function () {
        connect.server({
            root: 'dist',
            // livereload: true,
            port: 8888
        });
    });



    /*gulp.task('typescripts', function () {
        return gulp.src('src/scripts/!**!/!*.ts')
            .pipe(ts({
                //noImplicitAny: true
                //out: '.ts.js'
            }))
            .pipe(gulp.dest('./dist/scripts'))
        ;
    });*/

    gulp.task('images', function () {
        gulp.src('./src/images/**/*')
            //.pipe(imagemin())
            .pipe(gulp.dest('./dist/images'));
    });

    gulp.task('data', function () {
        gulp.src('./src/data/**/*')
            .pipe(gulp.dest('./dist/data'));
    });

    gulp.task('fonts', function () {
        gulp.src('./src/fonts/**/*')
            .pipe(gulp.dest('./dist/fonts'));
    });

    gulp.task('scss', function () {
        gulp.src('./src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
            .pipe(gulp.dest('./dist/css'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('scss:minify', function () {
        gulp.src('./src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/css'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('scss:vendors:source', function () {
        gulp.src('./src/scss/vendors/**/*.scss')
            .pipe(gulp.dest('./dist/css/vendors'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('scss:vendors:minify', function () {
        gulp.src('./src/scss/vendors/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/css/vendors'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('js', function () {
        gulp.src('./src/js/**/*.js')
            .pipe(gulp.dest('./dist/js'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('js:css:source', function () {
        gulp.src('./src/js/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
            .pipe(gulp.dest('./dist/js'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('js:css:minify', function () {
        gulp.src('./src/js/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('html', function () {
        return gulp.src('./src/*.html')
            .pipe(nunjucks({
                searchPaths: ['./src'],
                locals: {
                    env: env
                }
            }))
            .pipe(gulp.dest('dist'))
        //.pipe(connect.reload())
        ;
    });

    gulp.task('vendors', function () {
        gulp.src('./src/vendors/**/*.*')
            .pipe(gulp.dest('./dist/vendors'))
        //.pipe(connect.reload())
        ;
    });

    // gulp.task('watch', function () {
    //     gulp.watch('./src/scss/**/*.scss', ['scss', 'scss:minify', 'js:css:source', 'js:css:minify']);
    //     gulp.watch('./src/scss/vendors/**/*.scss', ['scss:vendors:source', 'scss:vendors:minify']);
    //     gulp.watch('./src/**/*.html', ['html']);
    //     gulp.watch('./src/js/**/*.js', ['js']);
    // });
    gulp.task('compress', function () {
        gulp.src(['./dist/js/*.js'])
            .pipe(minify())
            .pipe(gulp.dest('./dist/js'))
    });

    gulp.task('vcompress', function () {
        gulp.src(['./dist/vendors/**/*.js'])
            .pipe(minify())
            .pipe(gulp.dest('./dist/vendors/**'))
    });

    gulp.task('fcompress', function () {
        gulp.src(['./dist/fonts/*.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/fonts'))
    });

    gulp.task('start',  gulp.series("connect","compress","fcompress"), async function () {
        console.log("success");
    });


    gulp.task('default', gulp.series('vcompress'), async function () {
        console.log("success");
    });
    gulp.task('prod', gulp.series('data', 'images', 'fonts', 'vendors', 'html', 'scss', 'scss:vendors:source', 'scss:vendors:minify', 'scss:minify', 'js', 'js:css:source', 'js:css:minify'), async function () {
        console.log("success");
    });
})();