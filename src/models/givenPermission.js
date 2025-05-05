const { sequelize } = require("common");
const { DataTypes } = require("sequelize");

//A data object that stores the assigment of a specific named permission to a role, usergroup or user for a specific object or for general use.
const GivenPermission = sequelize.define(
  "givenPermission",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    permissionName: {
      //  A string value to refrence the named permission. It can either reference as groupName.permissionName or permissionName or groupName.*
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      // A string value to represent the role name to which the permission is given.
      type: DataTypes.STRING,
      allowNull: true,
    },
    subjectUserId: {
      // A string value to represent the user ID to whom the permission is given.
      type: DataTypes.STRING,
      allowNull: true,
    },
    subjectUserGroupId: {
      // A string value to represent the user group ID to which the permission is given.
      type: DataTypes.STRING,
      allowNull: true,
    },
    objectId: {
      // A string value to represent the object ID for which the permission is given.
      type: DataTypes.STRING,
      allowNull: true,
    },
    canDo: {
      // A boolean value to represent if the permission is active or not. A specific negative value can override a more general positive value or vice verse.
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isActive: {
      // isActive property will be set to false when deleted
      // so that the document will be archived
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
  },
  {
    indexes: [
      {
        unique: false,
        fields: ["permissionName"],
      },
      {
        unique: false,
        fields: ["roleId"],
      },
      {
        unique: false,
        fields: ["subjectUserId"],
      },
      {
        unique: false,
        fields: ["subjectUserGroupId"],
      },
      {
        unique: false,
        fields: ["objectId"],
      },
      {
        unique: false,
        fields: ["canDo"],
      },
    ],
  },
);

module.exports = GivenPermission;
