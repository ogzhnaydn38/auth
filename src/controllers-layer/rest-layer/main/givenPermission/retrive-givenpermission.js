const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { RetriveGivenpermissionManager } = require("managers");

const RestController = require("../../RestController");

class RetriveGivenpermissionRestController extends RestController {
  constructor(req, res, next) {
    super("retriveGivenpermission", "retrive-givenpermission", req, res, next);
    this.dataName = "givenPermission";
    this.crudType = "get";
    this.status = 200;
    this.httpMethod = "GET";
  }

  createApiManager() {
    return new RetriveGivenpermissionManager(this._req, "rest");
  }
}

const retriveGivenpermission = async (req, res, next) => {
  const retriveGivenpermissionRestController =
    new RetriveGivenpermissionRestController(req, res, next);
  await retriveGivenpermissionRestController.processRequest();
};

module.exports = retriveGivenpermission;
