const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateGivenpermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateGivenpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("createGivenpermission", "create-givenpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateGivenpermissionManager(this._req, "rest");
  }
}

const createGivenpermission = async (req, res, next) => {
  const createGivenpermissionRestController =
    new CreateGivenpermissionRestController(req, res, next);
  await createGivenpermissionRestController.processRequest();
};

module.exports = createGivenpermission;
