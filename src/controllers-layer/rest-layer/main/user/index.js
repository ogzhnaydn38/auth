const express = require("express");

// User Db Object Rest Api Router
const userRouter = express.Router();

// add User controllers

// register-user controller
userRouter.post("/users", require("./register-user"));
// update-user controller
userRouter.patch("/users/:userId", require("./update-user"));
// update-userrole controller
userRouter.patch("/userroles/:userId", require("./update-userrole"));
// retrive-user controller
userRouter.get("/users/:userId", require("./retrive-user"));
// list-users controller
userRouter.get("/users", require("./list-users"));

module.exports = userRouter;
