"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import browserify from "browserify";
import source from "vinyl-source-stream";
import {exec} from "child_process";

gulp.task("default", ["transpile", "style"]);

gulp.task("watch", ["default"], () => {
    gulp.watch("src/**/*", ["transpile"]);
    gulp.watch("assets/scss/**/*", ["style"]);
});

gulp.task("transpile", () => {
    return browserify("src/app.js")
        .transform("babelify")
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("style", () => {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task("api-server", (cb) => {
    exec('./node_modules/.bin/json-server ./api/data.json', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
