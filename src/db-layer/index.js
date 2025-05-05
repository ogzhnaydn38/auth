const mainFunctions = require("./main");

module.exports = {
  // main Database
  // User Db Object
  dbRegisterUser: mainFunctions.dbRegisterUser,
  dbUpdateUser: mainFunctions.dbUpdateUser,
  dbUpdateUserrole: mainFunctions.dbUpdateUserrole,
  dbRetriveUser: mainFunctions.dbRetriveUser,
  dbListUsers: mainFunctions.dbListUsers,
  createUser: mainFunctions.createUser,
  getIdListOfUserByField: mainFunctions.getIdListOfUserByField,
  getUserById: mainFunctions.getUserById,
  getUserAggById: mainFunctions.getUserAggById,
  getUserListByQuery: mainFunctions.getUserListByQuery,
  getUserStatsByQuery: mainFunctions.getUserStatsByQuery,
  getUserByQuery: mainFunctions.getUserByQuery,
  updateUserById: mainFunctions.updateUserById,
  updateUserByIdList: mainFunctions.updateUserByIdList,
  deleteUserById: mainFunctions.deleteUserById,
  getUserByEmail: mainFunctions.getUserByEmail,
  // GivenPermission Db Object
  dbCreateGivenpermission: mainFunctions.dbCreateGivenpermission,
  dbCreateRolepermission: mainFunctions.dbCreateRolepermission,
  dbCreateUserpermission: mainFunctions.dbCreateUserpermission,
  dbCreateGrouppermission: mainFunctions.dbCreateGrouppermission,
  dbCreateRolegrouppermission: mainFunctions.dbCreateRolegrouppermission,
  dbCreateObjectpermission: mainFunctions.dbCreateObjectpermission,
  dbCreateObjectgrouppermission: mainFunctions.dbCreateObjectgrouppermission,
  dbCreateObjectrolepermission: mainFunctions.dbCreateObjectrolepermission,
  dbCreateObjectgrouprolepermission:
    mainFunctions.dbCreateObjectgrouprolepermission,
  dbUpdateGivenpermission: mainFunctions.dbUpdateGivenpermission,
  dbDeleteGivenpermission: mainFunctions.dbDeleteGivenpermission,
  dbRetriveGivenpermission: mainFunctions.dbRetriveGivenpermission,
  dbListGivenpermissions: mainFunctions.dbListGivenpermissions,
  createGivenPermission: mainFunctions.createGivenPermission,
  getIdListOfGivenPermissionByField:
    mainFunctions.getIdListOfGivenPermissionByField,
  getGivenPermissionById: mainFunctions.getGivenPermissionById,
  getGivenPermissionAggById: mainFunctions.getGivenPermissionAggById,
  getGivenPermissionListByQuery: mainFunctions.getGivenPermissionListByQuery,
  getGivenPermissionStatsByQuery: mainFunctions.getGivenPermissionStatsByQuery,
  getGivenPermissionByQuery: mainFunctions.getGivenPermissionByQuery,
  updateGivenPermissionById: mainFunctions.updateGivenPermissionById,
  updateGivenPermissionByIdList: mainFunctions.updateGivenPermissionByIdList,
  deleteGivenPermissionById: mainFunctions.deleteGivenPermissionById,
};
