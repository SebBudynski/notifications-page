const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("index.scss").pipe(sass()).pipe(dest("./"));
  }

function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.build = series(buildStyles);
exports.default = series(buildStyles, watchTask);
