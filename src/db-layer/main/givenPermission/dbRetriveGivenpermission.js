const { sequelize } = require("common");
const { Op } = require("sequelize");
const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { hexaLogger } = require("common");

const { User, GivenPermission } = require("models");

const { DBGetSequelizeCommand } = require("dbCommand");

class DbRetriveGivenpermissionCommand extends DBGetSequelizeCommand {
  constructor(input) {
    super(input, GivenPermission);
    this.commandName = "dbRetriveGivenpermission";
    this.nullResult = false;
    this.objectName = "givenPermission";
    this.serviceLabel = "tickatme-auth-service";
  }

  loadHookFunctions() {
    super.loadHookFunctions({});
  }

  async getCqrsJoins(data) {
    if (GivenPermission.getCqrsJoins) await GivenPermission.getCqrsJoins(data);
  }

  initOwnership(input) {
    super.initOwnership(input);
  }

  async checkEntityOwnership(entity) {
    return true;
  }

  createEntityCacher() {
    super.createEntityCacher();
  }

  async transposeResult() {
    // transpose dbData
  }

  buildIncludes(forWhereClause) {
    if (!this.input.getJoins) forWhereClause = true;
    const includes = [];
    return includes;
  }
}

const dbRetriveGivenpermission = (input) => {
  input.id = input.givenPermissionId;
  const dbGetCommand = new DbRetriveGivenpermissionCommand(input);
  return dbGetCommand.execute();
};

module.exports = dbRetriveGivenpermission;
