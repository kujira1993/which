// ライブラリの読み込み。
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
 
// サーバ起動タスク。
// src がベースディレクトリ。
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});
 
// ブラウザリロードタスク。
gulp.task('bs-reload', function () {
    browserSync.reload();
});
 
// デフォルトタスク。
// 事前にサーバ起動タスクを実行する。
// ファイルが変更されたら、ブラウザリロードタスクを実行する。
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("src/*.html", ['bs-reload']);
    gulp.watch("src/assets/css/*.css", ['bs-reload']);
});