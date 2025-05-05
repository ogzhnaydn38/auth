const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");

const AuthServiceManager = require("../../service-manager/AuthServiceManager");

/* Base Class For the Crud Routes Of DbObject User */
class UserManager extends AuthServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "user";
    this.modelName = "User";
    this.routeResourcePath = "";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = UserManager;
