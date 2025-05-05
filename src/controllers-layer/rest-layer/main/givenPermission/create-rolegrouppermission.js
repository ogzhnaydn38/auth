const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateRolegrouppermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateRolegrouppermissionRestController extends RestController {
  constructor(req, res, next) {
    super(
      "createRolegrouppermission",
      "create-rolegrouppermission",
      req,
      res,
      next,
    );
    this.dataName = "givenPermission";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateRolegrouppermissionManager(this._req, "rest");
  }
}

const createRolegrouppermission = async (req, res, next) => {
  const createRolegrouppermissionRestController =
    new CreateRolegrouppermissionRestController(req, res, next);
  await createRolegrouppermissionRestController.processRequest();
};

module.exports = createRolegrouppermission;
