const UserManager = require("./UserManager");
const { isValidObjectId, isValidUUID, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const { UserRegisterredPublisher } = require("../../route-events/publishers");

const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { dbRegisterUser } = require("dbLayer");

class RegisterUserManager extends UserManager {
  constructor(request, controllerType) {
    super(request, {
      name: "registerUser",
      controllerType: controllerType,
      pagination: false,
      crudType: "create",
      loginRequired: false,
      hasShareToken: false,
    });

    this.dataName = "user";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.email = this.email;
    jsonObj.password = this.password;
    jsonObj.fullname = this.fullname;
    jsonObj.avatar = this.avatar;
    jsonObj.roleId = this.roleId;
    jsonObj.emailVerified = this.emailVerified;
  }

  readRestParameters(request) {
    this.email = request.body?.email;
    this.password = request.body?.password;
    this.fullname = request.body?.fullname;
    this.avatar = request.body?.avatar;
    this.roleId = request.body?.roleId;
    this.emailVerified = request.body?.emailVerified;
    this.id = request.body?.id ?? request.query?.id ?? request.id;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  async setVariables() {}

  checkParameters() {}

  setOwnership() {
    this.isOwner = false;
    if (!this.session || !this.session.userId) return;

    this.isOwner = this.user?.id === this.session.userId;
  }

  async doBusiness() {
    // Call DbFunction
    // make an awaited call to the dbRegisterUser function to create the user and return the result to the controller
    const user = await dbRegisterUser(this);

    return user;
  }

  async checkSessionInvalidates() {
    /*



*/
  }

  async raiseEvent() {
    UserRegisterredPublisher.Publish(this.output, this.session).catch((err) => {
      console.log("Publisher Error in Rest Controller:", err);
    });
  }

  async getDataClause() {
    const { newUUID } = require("common");

    const { hashString } = require("common");

    if (this.id) this.userId = this.id;
    if (!this.userId) this.userId = newUUID(false);

    const dataClause = {
      id: this.userId,
      email: this.email,
      password: hashString(this.password),
      fullname: this.fullname,
      avatar: this.avatar,
      roleId: this.roleId,
      emailVerified: this.emailVerified,
    };

    return dataClause;
  }
}

module.exports = RegisterUserManager;
