const userFunctions = require("./user");
const givenPermissionFunctions = require("./givenPermission");

module.exports = {
  // main Database
  // User Db Object
  dbRegisterUser: userFunctions.dbRegisterUser,
  dbUpdateUser: userFunctions.dbUpdateUser,
  dbUpdateUserrole: userFunctions.dbUpdateUserrole,
  dbRetriveUser: userFunctions.dbRetriveUser,
  dbListUsers: userFunctions.dbListUsers,
  createUser: userFunctions.createUser,
  getIdListOfUserByField: userFunctions.getIdListOfUserByField,
  getUserById: userFunctions.getUserById,
  getUserAggById: userFunctions.getUserAggById,
  getUserListByQuery: userFunctions.getUserListByQuery,
  getUserStatsByQuery: userFunctions.getUserStatsByQuery,
  getUserByQuery: userFunctions.getUserByQuery,
  updateUserById: userFunctions.updateUserById,
  updateUserByIdList: userFunctions.updateUserByIdList,
  deleteUserById: userFunctions.deleteUserById,
  getUserByEmail: userFunctions.getUserByEmail,
  // GivenPermission Db Object
  dbCreateGivenpermission: givenPermissionFunctions.dbCreateGivenpermission,
  dbCreateRolepermission: givenPermissionFunctions.dbCreateRolepermission,
  dbCreateUserpermission: givenPermissionFunctions.dbCreateUserpermission,
  dbCreateGrouppermission: givenPermissionFunctions.dbCreateGrouppermission,
  dbCreateRolegrouppermission:
    givenPermissionFunctions.dbCreateRolegrouppermission,
  dbCreateObjectpermission: givenPermissionFunctions.dbCreateObjectpermission,
  dbCreateObjectgrouppermission:
    givenPermissionFunctions.dbCreateObjectgrouppermission,
  dbCreateObjectrolepermission:
    givenPermissionFunctions.dbCreateObjectrolepermission,
  dbCreateObjectgrouprolepermission:
    givenPermissionFunctions.dbCreateObjectgrouprolepermission,
  dbUpdateGivenpermission: givenPermissionFunctions.dbUpdateGivenpermission,
  dbDeleteGivenpermission: givenPermissionFunctions.dbDeleteGivenpermission,
  dbRetriveGivenpermission: givenPermissionFunctions.dbRetriveGivenpermission,
  dbListGivenpermissions: givenPermissionFunctions.dbListGivenpermissions,
  createGivenPermission: givenPermissionFunctions.createGivenPermission,
  getIdListOfGivenPermissionByField:
    givenPermissionFunctions.getIdListOfGivenPermissionByField,
  getGivenPermissionById: givenPermissionFunctions.getGivenPermissionById,
  getGivenPermissionAggById: givenPermissionFunctions.getGivenPermissionAggById,
  getGivenPermissionListByQuery:
    givenPermissionFunctions.getGivenPermissionListByQuery,
  getGivenPermissionStatsByQuery:
    givenPermissionFunctions.getGivenPermissionStatsByQuery,
  getGivenPermissionByQuery: givenPermissionFunctions.getGivenPermissionByQuery,
  updateGivenPermissionById: givenPermissionFunctions.updateGivenPermissionById,
  updateGivenPermissionByIdList:
    givenPermissionFunctions.updateGivenPermissionByIdList,
  deleteGivenPermissionById: givenPermissionFunctions.deleteGivenPermissionById,
};
