const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateGrouppermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateGrouppermissionRestController extends RestController {
  constructor(req, res, next) {
    super("createGrouppermission", "create-grouppermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateGrouppermissionManager(this._req, "rest");
  }
}

const createGrouppermission = async (req, res, next) => {
  const createGrouppermissionRestController =
    new CreateGrouppermissionRestController(req, res, next);
  await createGrouppermissionRestController.processRequest();
};

module.exports = createGrouppermission;
