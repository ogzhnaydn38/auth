const GivenPermissionManager = require("./GivenPermissionManager");
const { isValidObjectId, isValidUUID, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const {
  GivenpermissionUpdatedPublisher,
} = require("../../route-events/publishers");

const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { dbUpdateGivenpermission } = require("dbLayer");

class UpdateGivenpermissionManager extends GivenPermissionManager {
  constructor(request, controllerType) {
    super(request, {
      name: "updateGivenpermission",
      controllerType: controllerType,
      pagination: false,
      crudType: "update",
      loginRequired: true,
      hasShareToken: false,
    });

    this.dataName = "givenPermission";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.permissionName = this.permissionName;
    jsonObj.roleId = this.roleId;
    jsonObj.subjectUserId = this.subjectUserId;
    jsonObj.subjectUserGroupId = this.subjectUserGroupId;
    jsonObj.objectId = this.objectId;
    jsonObj.canDo = this.canDo;
    jsonObj.givenPermissionId = this.givenPermissionId;
  }

  readRestParameters(request) {
    this.permissionName = request.body?.permissionName;
    this.roleId = request.body?.roleId;
    this.subjectUserId = request.body?.subjectUserId;
    this.subjectUserGroupId = request.body?.subjectUserGroupId;
    this.objectId = request.body?.objectId;
    this.canDo = request.body?.canDo;
    this.givenPermissionId = request.params?.givenPermissionId;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  async setVariables() {}

  async fetchInstance() {
    const { getGivenPermissionById } = require("dbLayer");
    this.givenPermission = await getGivenPermissionById(this.givenPermissionId);
    if (!this.givenPermission) {
      throw new NotFoundError("errMsg_RecordNotFound");
    }
  }

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

  checkAbsolute() {
    // Check if user has an absolute role to ignore all authorization validations and return
    if (this.userHasRole(this.ROLES.superAdmin)) {
      this.absoluteAuth = true;
      return true;
    }
    return false;
  }

  async checkLayer1BusinessValidations() {
    //check Layer1 validations

    // Validation Check: routeRoleCheck
    // Check if the logged in user has [superAdmin-admin-saasAdmin-tenantAdmin] roles
    if (
      !(
        this.userHasRole(this.ROLES.superAdmin) ||
        this.userHasRole(this.ROLES.admin) ||
        this.userHasRole(this.ROLES.saasAdmin) ||
        this.userHasRole(this.ROLES.tenantAdmin)
      )
    ) {
      throw new BadRequestError(
        "errMsg_userShoudlHave[superAdmin-admin-saasAdmin-tenantAdmin]RoleToAccessRoute",
      );
    }
  }

  async doBusiness() {
    // Call DbFunction
    // make an awaited call to the dbUpdateGivenpermission function to update the givenpermission and return the result to the controller
    const givenpermission = await dbUpdateGivenpermission(this);

    return givenpermission;
  }

  async checkSessionInvalidates() {
    /*



*/
  }

  async raiseEvent() {
    GivenpermissionUpdatedPublisher.Publish(this.output, this.session).catch(
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

  async getDataClause() {
    const { hashString } = require("common");

    const dataClause = {
      permissionName: this.permissionName,
      roleId: this.roleId,
      subjectUserId: this.subjectUserId,
      subjectUserGroupId: this.subjectUserGroupId,
      objectId: this.objectId,
      canDo: this.canDo,
    };

    return dataClause;
  }
}

module.exports = UpdateGivenpermissionManager;
