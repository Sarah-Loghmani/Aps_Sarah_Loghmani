const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//function for compiling sass to css
function buildStyles() {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}
//watcher function that will watch our source sas file
function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);

// * for gulp(a task runner) installing must type in the terminal=> npm i -D gulp// npm i gulp gulp-sass sass --save-dev
// * gulp commend is deprecated so use this:  npm i -D gulp-cli (to install gulp globally)
