const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { DeleteGivenpermissionManager } = require("managers");

const RestController = require("../../RestController");

class DeleteGivenpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("deleteGivenpermission", "delete-givenpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "delete";
    this.status = 200;
    this.httpMethod = "DELETE";
  }

  createApiManager() {
    return new DeleteGivenpermissionManager(this._req, "rest");
  }
}

const deleteGivenpermission = async (req, res, next) => {
  const deleteGivenpermissionRestController =
    new DeleteGivenpermissionRestController(req, res, next);
  await deleteGivenpermissionRestController.processRequest();
};

module.exports = deleteGivenpermission;
