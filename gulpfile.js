gulp = require("gulp");
slim = require("gulp-slim");
htmlmin = require("gulp-htmlmin");
sass = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
cssnano = require("gulp-cssnano");
browserSync = require("browser-sync");
rename = require("gulp-rename");
jsImport = require("gulp-js-import");
uglify = require("gulp-uglify");
pump = require("pump");
path = require("path");
fs = require("fs");

// Transform regions object to an array to add to regions filter =========================
regions = require("./src/js/_regions.js");
regions_arr = [];

Object.keys(regions_obj).forEach(function(name) {
  regions_arr.push({
    name: name,
    full_name: regions_obj[name].full_name,
    path: regions_obj[name].path
  });
});

// Browser sync ==========================================================================
gulp.task("sync", function() {
  return browserSync({
    server: "dist"
  });
});

// Compile HTML ==========================================================================
gulp.task("slim", function() {
  return gulp
    .src("src/slim/*.slim")
    .pipe(
      slim({
        pretty: true,
        data: {
          regions: regions_arr
        }
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Compile CSS ===========================================================================
gulp.task("scss", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cssnano())
    .pipe(
      rename(function(path) {
        path.basename += ".min";
        path.extname = ".css";
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Compile JS ============================================================================
gulp.task("js", function() {
  return (
    gulp
      .src("src/js/brain.js")
      .pipe(jsImport({ hideConsole: true }))
      .pipe(gulp.dest("./dist/js"))
      .pipe(
        rename(function(path) {
          path.basename += ".min";
          path.extname = ".js";
        })
      )
      // .pipe(uglify())
      .pipe(gulp.dest("./dist/js"))
      .pipe(
        browserSync.reload({
          stream: true
        })
      )
  );
});

// Move _redirects =======================================================================
gulp.task("redirects", function() {
  return gulp
    .src("src/_redirects")
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Init ==================================================================================
gulp.task("default", function() {
  gulp.run("sync");

  gulp.watch("src/slim/*.slim", function() {
    return gulp.run("slim");
  });

  gulp.watch("src/scss/*.scss", function() {
    return gulp.run("scss");
  });

  gulp.watch(
    ["src/js/_regions.js", "src/js/_settings.js", "src/js/brain.js"],
    function() {
      return gulp.run("js");
    }
  );

  gulp.watch("src/_redirects", function() {
    return gulp.run("redirects");
  });
});
