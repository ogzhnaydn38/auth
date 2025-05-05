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

const { DBCreateSequelizeCommand } = require("dbCommand");

const {
  GivenPermissionQueryCacheInvalidator,
} = require("./query-cache-classes");

const { ElasticIndexer } = require("serviceCommon");
const getGivenPermissionById = require("./utils/getGivenPermissionById");

class DbCreateObjectrolepermissionCommand extends DBCreateSequelizeCommand {
  constructor(input) {
    super(input);
    this.commandName = "dbCreateObjectrolepermission";
    this.objectName = "givenPermission";
    this.serviceLabel = "tickatme-auth-service";
    this.dbEvent = "tickatme-auth-service-dbevent-givenpermission-created";
  }

  loadHookFunctions() {
    super.loadHookFunctions({});
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

  async create_childs() {}

  async transposeResult() {
    // transpose dbData
  }

  async runDbCommand() {
    await super.runDbCommand();

    let givenPermission = null;
    let whereClause = {};
    let updated = false;
    try {
      if (!updated && this.dataClause.id) {
        givenPermission =
          givenPermission ||
          (await GivenPermission.findByPk(this.dataClause.id));
        if (givenPermission) {
          delete this.dataClause.id;
          this.dataClause.isActive = true;
          await givenPermission.update(this.dataClause);
          updated = true;
        }
      }
    } catch (error) {
      const eDetail = {
        whereClause: this.normalizeSequalizeOps(whereClause),
        dataClause: this.dataClause,
        errorStack: error.stack,
        checkoutResult: this.input.checkoutResult,
      };
      throw new HttpServerError(
        "Error in checking unique index when creating GivenPermission",
        eDetail,
      );
    }

    if (!updated) {
      givenPermission = await GivenPermission.create(this.dataClause);
    }

    this.dbData = givenPermission.getData();
    this.input.givenPermission = this.dbData;
    await this.create_childs();
  }
}

const dbCreateObjectrolepermission = async (input) => {
  const dbCreateCommand = new DbCreateObjectrolepermissionCommand(input);
  return await dbCreateCommand.execute();
};

module.exports = dbCreateObjectrolepermission;
