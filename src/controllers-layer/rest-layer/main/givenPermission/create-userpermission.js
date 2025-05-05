const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateUserpermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateUserpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("createUserpermission", "create-userpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateUserpermissionManager(this._req, "rest");
  }
}

const createUserpermission = async (req, res, next) => {
  const createUserpermissionRestController =
    new CreateUserpermissionRestController(req, res, next);
  await createUserpermissionRestController.processRequest();
};

module.exports = createUserpermission;
