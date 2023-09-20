const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function build() 
{
    return gulp.src('./scss/master.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
}

exports.build = build;
exports.default = build;