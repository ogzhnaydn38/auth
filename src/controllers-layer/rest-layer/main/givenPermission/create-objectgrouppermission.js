const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateObjectgrouppermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateObjectgrouppermissionRestController extends RestController {
  constructor(req, res, next) {
    super(
      "createObjectgrouppermission",
      "create-objectgrouppermission",
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
    return new CreateObjectgrouppermissionManager(this._req, "rest");
  }
}

const createObjectgrouppermission = async (req, res, next) => {
  const createObjectgrouppermissionRestController =
    new CreateObjectgrouppermissionRestController(req, res, next);
  await createObjectgrouppermissionRestController.processRequest();
};

module.exports = createObjectgrouppermission;
