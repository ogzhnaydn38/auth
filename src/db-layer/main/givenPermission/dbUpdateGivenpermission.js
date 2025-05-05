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

const {
  GivenPermissionQueryCacheInvalidator,
} = require("./query-cache-classes");

const { ElasticIndexer } = require("serviceCommon");
const getGivenPermissionById = require("./utils/getGivenPermissionById");

class DbUpdateGivenpermissionCommand extends DBUpdateSequelizeCommand {
  constructor(input) {
    const instanceMode = true;
    input.isBulk = false;
    input.updateEach = false;
    super(input, GivenPermission, instanceMode);
    this.isBulk = false;
    this.commandName = "dbUpdateGivenpermission";
    this.nullResult = false;
    this.objectName = "givenPermission";
    this.serviceLabel = "tickatme-auth-service";
    this.joinedCriteria = false;
    this.dbEvent = "tickatme-auth-service-dbevent-givenpermission-updated";
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
    this.queryCacheInvalidator = new GivenPermissionQueryCacheInvalidator();
  }

  createEntityCacher() {
    super.createEntityCacher();
  }

  async indexDataToElastic() {
    const elasticIndexer = new ElasticIndexer(
      "givenPermission",
      this.session,
      this.requestId,
    );
    const dbData = await getGivenPermissionById(this.dbData.id);
    await elasticIndexer.indexData(dbData);
  }

  async setCalculatedFieldsAfterInstance(data) {
    const input = this.input;
  }

  async createDbInstance() {
    this.dbInstance = await getGivenPermissionById(this.input.id);

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

const dbUpdateGivenpermission = async (input) => {
  input.id = input.givenPermissionId;
  const dbUpdateCommand = new DbUpdateGivenpermissionCommand(input);
  return await dbUpdateCommand.execute();
};

module.exports = dbUpdateGivenpermission;
