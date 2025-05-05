const utils = require("./utils");

module.exports = {
  dbRegisterUser: require("./dbRegisterUser"),
  dbUpdateUser: require("./dbUpdateUser"),
  dbUpdateUserrole: require("./dbUpdateUserrole"),
  dbRetriveUser: require("./dbRetriveUser"),
  dbListUsers: require("./dbListUsers"),
  createUser: utils.createUser,
  getIdListOfUserByField: utils.getIdListOfUserByField,
  getUserById: utils.getUserById,
  getUserAggById: utils.getUserAggById,
  getUserListByQuery: utils.getUserListByQuery,
  getUserStatsByQuery: utils.getUserStatsByQuery,
  getUserByQuery: utils.getUserByQuery,
  updateUserById: utils.updateUserById,
  updateUserByIdList: utils.updateUserByIdList,
  deleteUserById: utils.deleteUserById,
  getUserByEmail: utils.getUserByEmail,
};
