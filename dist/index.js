"use strict";

require("./database.js");
var _app = _interopRequireDefault(require("./app.js"));
var _config = require("./config.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Starting the server
_app["default"].listen(_config.PORT, function () {
  console.log("Server is running on port", _config.PORT);
});