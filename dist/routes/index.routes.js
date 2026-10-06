"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasksController = require("../controllers/tasks.controller.js");
var router = (0, _express.Router)();
router.get("/", _tasksController.renderTask);
router.post("/task/add", _tasksController.createTask);
router.get("/tasks/:id/toggleDone", _tasksController.taskToggleDone);
router.get("/tasks/:id/edit", _tasksController.renderTaskEdit);
router.post("/tasks/:id/edit", _tasksController.editTask);
router.get("/tasks/:id/delete", _tasksController.deleteTask);
var _default = exports["default"] = router;