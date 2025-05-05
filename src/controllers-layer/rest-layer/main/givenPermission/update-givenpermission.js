const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { UpdateGivenpermissionManager } = require("managers");

const RestController = require("../../RestController");

class UpdateGivenpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("updateGivenpermission", "update-givenpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "update";
    this.status = 200;
    this.httpMethod = "PATCH";
  }

  createApiManager() {
    return new UpdateGivenpermissionManager(this._req, "rest");
  }
}

const updateGivenpermission = async (req, res, next) => {
  const updateGivenpermissionRestController =
    new UpdateGivenpermissionRestController(req, res, next);
  await updateGivenpermissionRestController.processRequest();
};

module.exports = updateGivenpermission;
