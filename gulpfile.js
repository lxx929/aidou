/*
 * @Author: 刘祥祥 
 * @Date: 2019-04-01 08:50:17 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-04-01 10:09:42
 * function(){前台代理}
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-webserver');

gulp.task('scss', () => { //编译scss
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', () => { //监听scss
    gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});

gulp.task('server', () => { //启动服务
    return gulp.src('./src')
        .pipe(server({
            prot: 9898,
            open: true,
            proxies: [{
                source: '/api/getData',
                target: 'http://localhost:3000/api/getData'
            }, {
                source: '/api/getDatas',
                target: 'http://localhost:3000/api/getDatas'
            }]
        }));
});

gulp.task('default', gulp.series('scss', 'server', 'watch'));