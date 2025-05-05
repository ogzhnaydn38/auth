const GivenPermissionManager = require("./GivenPermissionManager");
const { isValidObjectId, isValidUUID, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const {
  GivenpermissionRetrivedPublisher,
} = require("../../route-events/publishers");

const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { dbRetriveGivenpermission } = require("dbLayer");

class RetriveGivenpermissionManager extends GivenPermissionManager {
  constructor(request, controllerType) {
    super(request, {
      name: "retriveGivenpermission",
      controllerType: controllerType,
      pagination: false,
      crudType: "get",
      loginRequired: true,
      hasShareToken: false,
    });

    this.dataName = "givenPermission";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.givenPermissionId = this.givenPermissionId;
  }

  readRestParameters(request) {
    this.givenPermissionId = request.params?.givenPermissionId;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  async setVariables() {}

  checkParameters() {
    if (this.givenPermissionId == null) {
      throw new BadRequestError("errMsg_givenPermissionIdisRequired");
    }

    // ID
    if (
      this.givenPermissionId &&
      !isValidObjectId(this.givenPermissionId) &&
      !isValidUUID(this.givenPermissionId)
    ) {
      throw new BadRequestError("errMsg_givenPermissionIdisNotAValidID");
    }
  }

  setOwnership() {
    this.isOwner = false;
    if (!this.session || !this.session.userId) return;

    this.isOwner = this.givenPermission?._owner === this.session.userId;
  }

  async doBusiness() {
    // Call DbFunction
    // make an awaited call to the dbRetriveGivenpermission function to get the givenpermission and return the result to the controller
    const givenpermission = await dbRetriveGivenpermission(this);

    return givenpermission;
  }

  async checkSessionInvalidates() {
    /*



*/
  }

  async raiseEvent() {
    GivenpermissionRetrivedPublisher.Publish(this.output, this.session).catch(
      (err) => {
        console.log("Publisher Error in Rest Controller:", err);
      },
    );
  }

  async getRouteQuery() {
    return { $and: [{ id: this.givenPermissionId }, { isActive: true }] };

    // handle permission filter later
  }

  async getWhereClause() {
    const { convertUserQueryToSequelizeQuery } = require("common");

    const routeQuery = this.getRouteQuery();

    return convertUserQueryToSequelizeQuery(routeQuery);
  }
}

module.exports = RetriveGivenpermissionManager;
