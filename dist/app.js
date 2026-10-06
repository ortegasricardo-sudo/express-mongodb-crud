"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _path = require("path");
var _url = require("url");
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// initialization
var app = (0, _express["default"])();
var _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url));

// settings
app.set("views", (0, _path.join)(_dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars.engine)({
  layoutsDir: (0, _path.join)(app.get("views"), "layouts"),
  partialsDir: (0, _path.join)(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");

// middlewares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));

// routes
app.use(_indexRoutes["default"]);

// static files
app.use(_express["default"]["static"]((0, _path.join)(_dirname, "public")));
var _default = exports["default"] = app;