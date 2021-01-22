const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("autoprefixer"),
    rename = require("gulp-rename"),
    cssnano = require("cssnano"),
    postcss = require("gulp-postcss"),
    cleanCSS = require("gulp-clean-css"),
    imagemin = require("gulp-imagemin"),
    changed = require("gulp-changed");

const SCSS_SRC = "./src/assets/scss/*.scss",
    IMG_SRC = "./src/assets/img/*.{gif,jpg,png,svg}",
    IMG_DEST = "./src/assets/min-image",
    SCSS_DEST = "./src/assets/css";
//IMG_SRC = "./src/assets/**/*.jpg";
//  IMG_DEST = "./src/assets/**/*.jpg";
function image() {
    return gulp.src([IMG_SRC]).pipe(gulp.dest(IMG_DEST));
}

function style() {
    let processors = [autoprefixer, cssnano];
    return gulp
        .src(SCSS_SRC)
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(processors)) /*add*/ // PostCSS plugins
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(changed(SCSS_SRC))
        .pipe(gulp.dest(SCSS_DEST));
}
function watch() {
    gulp.watch(SCSS_SRC, style);
}
gulp.task("default", watch);
gulp.task("image", image);
