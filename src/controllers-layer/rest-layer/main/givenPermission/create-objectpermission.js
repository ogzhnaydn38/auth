const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateObjectpermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateObjectpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("createObjectpermission", "create-objectpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateObjectpermissionManager(this._req, "rest");
  }
}

const createObjectpermission = async (req, res, next) => {
  const createObjectpermissionRestController =
    new CreateObjectpermissionRestController(req, res, next);
  await createObjectpermissionRestController.processRequest();
};

module.exports = createObjectpermission;
