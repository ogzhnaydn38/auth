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

class DbRetriveUserCommand extends DBGetSequelizeCommand {
  constructor(input) {
    super(input, User);
    this.commandName = "dbRetriveUser";
    this.nullResult = false;
    this.objectName = "user";
    this.serviceLabel = "tickatme-auth-service";
  }

  loadHookFunctions() {
    super.loadHookFunctions({});
  }

  async getCqrsJoins(data) {
    if (User.getCqrsJoins) await User.getCqrsJoins(data);
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

const dbRetriveUser = (input) => {
  input.id = input.userId;
  const dbGetCommand = new DbRetriveUserCommand(input);
  return dbGetCommand.execute();
};

module.exports = dbRetriveUser;
