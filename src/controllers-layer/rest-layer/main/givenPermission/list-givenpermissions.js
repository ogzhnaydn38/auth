const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { ListGivenpermissionsManager } = require("managers");

const RestController = require("../../RestController");

class ListGivenpermissionsRestController extends RestController {
  constructor(req, res, next) {
    super("listGivenpermissions", "list-givenpermissions", req, res, next);
    this.dataName = "givenPermissions";
    this.crudType = "getList";
    this.status = 200;
    this.httpMethod = "GET";
  }

  createApiManager() {
    return new ListGivenpermissionsManager(this._req, "rest");
  }
}

const listGivenpermissions = async (req, res, next) => {
  const listGivenpermissionsRestController =
    new ListGivenpermissionsRestController(req, res, next);
  await listGivenpermissionsRestController.processRequest();
};

module.exports = listGivenpermissions;
