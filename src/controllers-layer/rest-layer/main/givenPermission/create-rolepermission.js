const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateRolepermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateRolepermissionRestController extends RestController {
  constructor(req, res, next) {
    super("createRolepermission", "create-rolepermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateRolepermissionManager(this._req, "rest");
  }
}

const createRolepermission = async (req, res, next) => {
  const createRolepermissionRestController =
    new CreateRolepermissionRestController(req, res, next);
  await createRolepermissionRestController.processRequest();
};

module.exports = createRolepermission;
