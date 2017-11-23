var gulp        = require('gulp');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


gulp.task('serve', ['sass'], function() {
    
        browserSync.init({
            server: "./"
        });
    
        gulp.watch("scss/*.scss", ['sass']);
        gulp.watch("*.html").on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('css', function(){
    gulp.src(['vendor/*.css', 'css/*.css'])
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
});

// gulp.task('js', function(){
//     gulp.src(['vendor/*.js', 'js/gallery.js', 'js/animate.js', 'js/index.js'])
//         .pipe(uglify())
//         .pipe(concat('index.min.js'))
//         .pipe(gulp.dest('dist/js'))
// });

gulp.task('js', function(){
    gulp.src(['vendor/*.js', 'js/gallery.js', 'js/animate.js', 'js/index.js'])
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('dist/js'))
});



gulp.task('copy', function () {

    gulp.src(['index.html'])
        .pipe(gulp.dest('dist'));

    gulp.src(['content/**/*'])
        .pipe(gulp.dest('dist/content'));

    gulp.src(['img/**/*'])
        .pipe(gulp.dest('dist/img'));
    
});

// gulp.task('default', ['copy','js','css']);

gulp.task('default', ['serve']);