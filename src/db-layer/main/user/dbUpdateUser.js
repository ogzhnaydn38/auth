const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");

const { User, GivenPermission } = require("models");
const { Op } = require("sequelize");
const { sequelize } = require("common");
const { hexaLogger } = require("common");

const { DBUpdateSequelizeCommand } = require("dbCommand");

const { UserQueryCacheInvalidator } = require("./query-cache-classes");

const { ElasticIndexer } = require("serviceCommon");
const getUserById = require("./utils/getUserById");

const { hashString } = require("common");

class DbUpdateUserCommand extends DBUpdateSequelizeCommand {
  constructor(input) {
    const instanceMode = true;
    input.isBulk = false;
    input.updateEach = false;
    super(input, User, instanceMode);
    this.isBulk = false;
    this.commandName = "dbUpdateUser";
    this.nullResult = false;
    this.objectName = "user";
    this.serviceLabel = "tickatme-auth-service";
    this.joinedCriteria = false;
    this.dbEvent = "tickatme-auth-service-dbevent-user-updated";
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

  async createQueryCacheInvalidator() {
    this.queryCacheInvalidator = new UserQueryCacheInvalidator();
  }

  createEntityCacher() {
    super.createEntityCacher();
  }

  async indexDataToElastic() {
    const elasticIndexer = new ElasticIndexer(
      "user",
      this.session,
      this.requestId,
    );
    const dbData = await getUserById(this.dbData.id);
    await elasticIndexer.indexData(dbData);
  }

  async setCalculatedFieldsAfterInstance(data) {
    const input = this.input;
  }

  async createDbInstance() {
    this.dbInstance = await getUserById(this.input.id);

    if (!this.dbInstance) {
      throw new NotFoundError("errMsg_RecordNotFoundToUpdate");
    }
  }

  buildIncludes(forWhereClause) {
    if (!this.input.getJoins) forWhereClause = true;
    const includes = [];
    return includes;
  }
}

const dbUpdateUser = async (input) => {
  input.id = input.userId;
  const dbUpdateCommand = new DbUpdateUserCommand(input);
  return await dbUpdateCommand.execute();
};

module.exports = dbUpdateUser;
