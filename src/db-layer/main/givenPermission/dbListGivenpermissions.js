const { DBGetListSequelizeCommand } = require("dbCommand");
const { sequelize, hexaLogger } = require("common");
const { Op } = require("sequelize");
const { User, GivenPermission } = require("models");

class DbListGivenpermissionsCommand extends DBGetListSequelizeCommand {
  constructor(input) {
    super(input);
    this.commandName = "dbListGivenpermissions";
    this.emptyResult = true;
    this.objectName = "givenPermissions";
    this.serviceLabel = "tickatme-auth-service";
    this.input.pagination = null;
  }

  loadHookFunctions() {
    super.loadHookFunctions({});
  }

  initOwnership(input) {
    super.initOwnership(input);
  }

  async transposeResult() {
    // transpose dbData
  }

  buildIncludes(forWhereClause) {
    if (!this.input.getJoins) forWhereClause = true;
    const includes = [];
    return includes;
  }

  async getCqrsJoins(item) {
    if (GivenPermission.getCqrsJoins) {
      await GivenPermission.getCqrsJoins(item);
    }
  }

  async executeQuery() {
    const input = this.input;
    let options = { where: this.whereClause };
    if (input.sortBy) options.order = input.sortBy ?? [["id", "ASC"]];

    options.include = this.buildIncludes();
    if (options.include && options.include.length == 0) options.include = null;

    if (!input.getJoins) {
      options.include = null;
    }

    let givenPermissions = null;

    const selectList = this.getSelectList();
    if (selectList && selectList.length) {
      options.attributes = selectList;
    }

    givenPermissions = await GivenPermission.findAll(options);

    return givenPermissions;
  }
}

const dbListGivenpermissions = (input) => {
  const dbGetListCommand = new DbListGivenpermissionsCommand(input);
  return dbGetListCommand.execute();
};

module.exports = dbListGivenpermissions;
