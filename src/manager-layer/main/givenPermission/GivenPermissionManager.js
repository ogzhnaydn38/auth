const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");

const AuthServiceManager = require("../../service-manager/AuthServiceManager");

/* Base Class For the Crud Routes Of DbObject GivenPermission */
class GivenPermissionManager extends AuthServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "givenPermission";
    this.modelName = "GivenPermission";
    this.routeResourcePath = "";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = GivenPermissionManager;
