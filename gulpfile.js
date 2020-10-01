let gulp = require('gulp')
let ts = require('gulp-typescript')
let tsProject = ts.createProject('tsConfig.json')

gulp.task('build', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist"))
})
