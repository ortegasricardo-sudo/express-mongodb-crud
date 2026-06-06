"use strict";

require("./database");
var _app = _interopRequireDefault(require("./app"));
var _config = require("./config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_app["default"].listen(_config.PORT);
console.log("Server on port", _config.PORT);