const express = require("express");

// GivenPermission Db Object Rest Api Router
const givenPermissionRouter = express.Router();

// add GivenPermission controllers

// create-givenpermission controller
givenPermissionRouter.post(
  "/givenpermissions",
  require("./create-givenpermission"),
);
// create-rolepermission controller
givenPermissionRouter.post(
  "/rolepermissions",
  require("./create-rolepermission"),
);
// create-userpermission controller
givenPermissionRouter.post(
  "/userpermissions",
  require("./create-userpermission"),
);
// create-grouppermission controller
givenPermissionRouter.post(
  "/grouppermissions",
  require("./create-grouppermission"),
);
// create-rolegrouppermission controller
givenPermissionRouter.post(
  "/rolegrouppermissions",
  require("./create-rolegrouppermission"),
);
// create-objectpermission controller
givenPermissionRouter.post(
  "/objectpermissions",
  require("./create-objectpermission"),
);
// create-objectgrouppermission controller
givenPermissionRouter.post(
  "/objectgrouppermissions",
  require("./create-objectgrouppermission"),
);
// create-objectrolepermission controller
givenPermissionRouter.post(
  "/objectrolepermissions",
  require("./create-objectrolepermission"),
);
// create-objectgrouprolepermission controller
givenPermissionRouter.post(
  "/objectgrouprolepermissions",
  require("./create-objectgrouprolepermission"),
);
// update-givenpermission controller
givenPermissionRouter.patch(
  "/givenpermissions/:givenPermissionId",
  require("./update-givenpermission"),
);
// delete-givenpermission controller
givenPermissionRouter.delete(
  "/givenpermissions/:givenPermissionId",
  require("./delete-givenpermission"),
);
// retrive-givenpermission controller
givenPermissionRouter.get(
  "/givenpermissions/:givenPermissionId",
  require("./retrive-givenpermission"),
);
// list-givenpermissions controller
givenPermissionRouter.get(
  "/givenpermissions",
  require("./list-givenpermissions"),
);

module.exports = givenPermissionRouter;
