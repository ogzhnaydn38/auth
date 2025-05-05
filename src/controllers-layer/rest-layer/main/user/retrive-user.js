const { HexaLogTypes, hexaLogger } = require("serviceCommon");

const { RetriveUserManager } = require("managers");

const RestController = require("../../RestController");

class RetriveUserRestController extends RestController {
  constructor(req, res, next) {
    super("retriveUser", "retrive-user", req, res, next);
    this.dataName = "user";
    this.crudType = "get";
    this.status = 200;
    this.httpMethod = "GET";
  }

  createApiManager() {
    return new RetriveUserManager(this._req, "rest");
  }
}

const retriveUser = async (req, res, next) => {
  const retriveUserRestController = new RetriveUserRestController(
    req,
    res,
    next,
  );
  await retriveUserRestController.processRequest();
};

module.exports = retriveUser;
