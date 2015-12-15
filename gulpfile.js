var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('host', function() {
  gulp.src('.')
    .pipe(webserver({
        port: process.env.PORT || "8989",
        host: process.env.IP || "localhost",
        livereload: true,
        open: true,
        fallback: 'index.html'
    }));
});
