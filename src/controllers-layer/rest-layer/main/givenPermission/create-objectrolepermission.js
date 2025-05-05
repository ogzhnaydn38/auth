const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateObjectrolepermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateObjectrolepermissionRestController extends RestController {
  constructor(req, res, next) {
    super(
      "createObjectrolepermission",
      "create-objectrolepermission",
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
    return new CreateObjectrolepermissionManager(this._req, "rest");
  }
}

const createObjectrolepermission = async (req, res, next) => {
  const createObjectrolepermissionRestController =
    new CreateObjectrolepermissionRestController(req, res, next);
  await createObjectrolepermissionRestController.processRequest();
};

module.exports = createObjectrolepermission;
