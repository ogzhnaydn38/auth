module.exports = {
  // main Database Crud Object Routes Manager Layer Classes
  // User Db Object
  RegisterUserManager: require("./user/register-user"),
  UpdateUserManager: require("./user/update-user"),
  UpdateUserroleManager: require("./user/update-userrole"),
  RetriveUserManager: require("./user/retrive-user"),
  ListUsersManager: require("./user/list-users"),
  // GivenPermission Db Object
  CreateGivenpermissionManager: require("./givenPermission/create-givenpermission"),
  CreateRolepermissionManager: require("./givenPermission/create-rolepermission"),
  CreateUserpermissionManager: require("./givenPermission/create-userpermission"),
  CreateGrouppermissionManager: require("./givenPermission/create-grouppermission"),
  CreateRolegrouppermissionManager: require("./givenPermission/create-rolegrouppermission"),
  CreateObjectpermissionManager: require("./givenPermission/create-objectpermission"),
  CreateObjectgrouppermissionManager: require("./givenPermission/create-objectgrouppermission"),
  CreateObjectrolepermissionManager: require("./givenPermission/create-objectrolepermission"),
  CreateObjectgrouprolepermissionManager: require("./givenPermission/create-objectgrouprolepermission"),
  UpdateGivenpermissionManager: require("./givenPermission/update-givenpermission"),
  DeleteGivenpermissionManager: require("./givenPermission/delete-givenpermission"),
  RetriveGivenpermissionManager: require("./givenPermission/retrive-givenpermission"),
  ListGivenpermissionsManager: require("./givenPermission/list-givenpermissions"),
};
