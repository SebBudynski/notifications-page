const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("style/index.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["style/index.scss"], buildStyles);
}

exports.build = series(buildStyles);
exports.default = series(buildStyles, watchTask);
