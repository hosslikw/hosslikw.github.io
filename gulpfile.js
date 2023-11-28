const gulp = require("gulp");
const { series, parallel } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const typescript = require("gulp-typescript");
const stylelint = require('gulp-stylelint');
const htmlhint = require('gulp-htmlhint');


// Run all tasks in series
gulp.task("default", series("pug", "sass", "typescript", "lint-css", "lint-html"));


gulp.task("watch", function () {
  gulp.watch(".vscode/preprocessors/pug/**/*.pug", gulp.series("pug"));
  gulp.watch(".vscode/preprocessors/sass/**/*.scss", gulp.series("sass")); // Adjust the extension as needed
  gulp.watch(
    ".vscode/preprocessors/typescript/**/*.ts",
    gulp.series("typescript")
  );
});



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







// CSS Linting Task
gulp.task('lint-css', function () {
  return gulp
    .src('path/to/your/css/**/*.css') // Adjust the path to your CSS files
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      fix: true // Auto-fix solvable issues
    }));
});

// HTML Linting Task
gulp.task('lint-html', function () {
  return gulp
    .src('path/to/your/html/**/*.html') // Adjust the path to your HTML files
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());
});
