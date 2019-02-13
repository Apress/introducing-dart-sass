var sass = require("dart-sass");
var Fiber = require("fibers");

sass.render({
  file: "test.scss",
  fiber: Fiber
});