const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { CreateObjectgrouprolepermissionManager } = require("managers");

const RestController = require("../../RestController");

class CreateObjectgrouprolepermissionRestController extends RestController {
  constructor(req, res, next) {
    super(
      "createObjectgrouprolepermission",
      "create-objectgrouprolepermission",
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
    return new CreateObjectgrouprolepermissionManager(this._req, "rest");
  }
}

const createObjectgrouprolepermission = async (req, res, next) => {
  const createObjectgrouprolepermissionRestController =
    new CreateObjectgrouprolepermissionRestController(req, res, next);
  await createObjectgrouprolepermissionRestController.processRequest();
};

module.exports = createObjectgrouprolepermission;
