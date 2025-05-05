const GivenPermissionManager = require("./GivenPermissionManager");
const { isValidObjectId, isValidUUID, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const {
  UserpermissionCreatedPublisher,
} = require("../../route-events/publishers");

const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { dbCreateUserpermission } = require("dbLayer");

class CreateUserpermissionManager extends GivenPermissionManager {
  constructor(request, controllerType) {
    super(request, {
      name: "createUserpermission",
      controllerType: controllerType,
      pagination: false,
      crudType: "create",
      loginRequired: true,
      hasShareToken: false,
    });

    this.dataName = "givenPermission";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.subjectUserId = this.subjectUserId;
    jsonObj.permissionName = this.permissionName;
    jsonObj.canDo = this.canDo;
  }

  readRestParameters(request) {
    this.subjectUserId = request.body?.subjectUserId;
    this.permissionName = request.body?.permissionName;
    this.canDo = request.body?.canDo;
    this.id = request.body?.id ?? request.query?.id ?? request.id;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  async setVariables() {}

  checkParameters() {
    if (this.subjectUserId == null) {
      throw new BadRequestError("errMsg_subjectUserIdisRequired");
    }

    if (this.permissionName == null) {
      throw new BadRequestError("errMsg_permissionNameisRequired");
    }

    if (this.canDo == null) {
      throw new BadRequestError("errMsg_canDoisRequired");
    }

    // ID
    if (
      this.subjectUserId &&
      !isValidObjectId(this.subjectUserId) &&
      !isValidUUID(this.subjectUserId)
    ) {
      throw new BadRequestError("errMsg_subjectUserIdisNotAValidID");
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
    // make an awaited call to the dbCreateUserpermission function to create the userpermission and return the result to the controller
    const userpermission = await dbCreateUserpermission(this);

    return userpermission;
  }

  async checkSessionInvalidates() {
    /*



*/
  }

  async raiseEvent() {
    UserpermissionCreatedPublisher.Publish(this.output, this.session).catch(
      (err) => {
        console.log("Publisher Error in Rest Controller:", err);
      },
    );
  }

  async getDataClause() {
    const { newUUID } = require("common");

    const { hashString } = require("common");

    if (this.id) this.givenPermissionId = this.id;
    if (!this.givenPermissionId) this.givenPermissionId = newUUID(false);

    const dataClause = {
      id: this.givenPermissionId,
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

module.exports = CreateUserpermissionManager;
