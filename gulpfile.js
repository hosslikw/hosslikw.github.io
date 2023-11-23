gulp.task("watch", function () {
  gulp.watch(".vscode/preprocessors/pug/**/*.pug", gulp.series("pug"));
  gulp.watch(".vscode/preprocessors/sass/**/*.scss", gulp.series("sass")); // Adjust the extension as needed
  gulp.watch(
    ".vscode/preprocessors/typescript/**/*.ts",
    gulp.series("typescript")
  );
});

const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const typescript = require("gulp-typescript");

gulp.task("pug", function () {
  return gulp
    .src(".vscode/preprocessors/pug/navbar.pug") // Target all .pug files
    .pipe(pug())
    .pipe(gulp.dest("html"));
});

gulp.task("sass", function () {
  return gulp
    .src(".vscode/preprocessors/sass/**/*.scss") // Adjust the extension as needed
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"));
});

gulp.task("typescript", function () {
  return gulp
    .src(".vscode/preprocessors/typescript/index.ts")
    .pipe(typescript())
    .pipe(gulp.dest("js"));
});

const { series, parallel } = require("gulp");

// Run all tasks in series
gulp.task("default", series("pug", "sass", "typescript"));

// Or run some tasks in parallel (if they don't depend on each other)
// gulp.task('default', parallel('pug', 'sass', 'typescript'));
