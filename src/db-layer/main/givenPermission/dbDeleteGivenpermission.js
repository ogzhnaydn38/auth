const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const {
  GivenPermissionQueryCacheInvalidator,
} = require("./query-cache-classes");

const { ElasticIndexer } = require("serviceCommon");

const { DBHardDeleteSequelizeCommand } = require("dbCommand");

class DbDeleteGivenpermissionCommand extends DBHardDeleteSequelizeCommand {
  constructor(input) {
    const instanceMode = true;
    super(input, GivenPermission, instanceMode);
    this.commandName = "dbDeleteGivenpermission";
    this.nullResult = false;
    this.objectName = "givenPermission";
    this.serviceLabel = "tickatme-auth-service";
    this.dbEvent = "tickatme-auth-service-dbevent-givenpermission-deleted";
  }

  loadHookFunctions() {
    super.loadHookFunctions({});
  }

  initOwnership(input) {
    super.initOwnership(input);
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
    await elasticIndexer.deleteData(this.dbData.id);
  }

  async transposeResult() {
    // transpose dbData
  }

  async createDbInstance() {
    this.dbInstance = await getGivenPermissionById(this.input.id);

    if (!this.dbInstance) {
      throw new NotFoundError("errMsg_RecordNotFoundToDelete");
    }
    this.input.givenPermission = this.dbInstance;
  }
}

const dbDeleteGivenpermission = async (input) => {
  input.id = input.givenPermissionId;
  const dbDeleteCommand = new DbDeleteGivenpermissionCommand(input);
  return dbDeleteCommand.execute();
};

module.exports = dbDeleteGivenpermission;
