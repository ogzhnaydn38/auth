module.exports = {
  AuthServiceManager: require("./service-manager/AuthServiceManager"),
  // main Database Crud Object Routes Manager Layer Classes
  // User Db Object
  RegisterUserManager: require("./main/user/register-user"),
  UpdateUserManager: require("./main/user/update-user"),
  UpdateUserroleManager: require("./main/user/update-userrole"),
  RetriveUserManager: require("./main/user/retrive-user"),
  ListUsersManager: require("./main/user/list-users"),
  // GivenPermission Db Object
  CreateGivenpermissionManager: require("./main/givenPermission/create-givenpermission"),
  CreateRolepermissionManager: require("./main/givenPermission/create-rolepermission"),
  CreateUserpermissionManager: require("./main/givenPermission/create-userpermission"),
  CreateGrouppermissionManager: require("./main/givenPermission/create-grouppermission"),
  CreateRolegrouppermissionManager: require("./main/givenPermission/create-rolegrouppermission"),
  CreateObjectpermissionManager: require("./main/givenPermission/create-objectpermission"),
  CreateObjectgrouppermissionManager: require("./main/givenPermission/create-objectgrouppermission"),
  CreateObjectrolepermissionManager: require("./main/givenPermission/create-objectrolepermission"),
  CreateObjectgrouprolepermissionManager: require("./main/givenPermission/create-objectgrouprolepermission"),
  UpdateGivenpermissionManager: require("./main/givenPermission/update-givenpermission"),
  DeleteGivenpermissionManager: require("./main/givenPermission/delete-givenpermission"),
  RetriveGivenpermissionManager: require("./main/givenPermission/retrive-givenpermission"),
  ListGivenpermissionsManager: require("./main/givenPermission/list-givenpermissions"),
};
