const { ElasticIndexer } = require("serviceCommon");
const { hexaLogger } = require("common");

const userMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  email: { type: "keyword", index: true },
  password: { type: "keyword", index: false },
  fullname: { type: "keyword", index: true },
  avatar: { type: "keyword", index: false },
  roleId: { type: "keyword", index: true },
  emailVerified: { type: "boolean", null_value: false },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};
const givenPermissionMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  permissionName: { type: "keyword", index: true },
  roleId: { type: "keyword", index: true },
  subjectUserId: { type: "keyword", index: true },
  subjectUserGroupId: { type: "keyword", index: true },
  objectId: { type: "keyword", index: true },
  canDo: { type: "boolean", null_value: false },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};

const updateElasticIndexMappings = async () => {
  try {
    ElasticIndexer.addMapping("user", userMapping);
    await new ElasticIndexer("user").updateMapping(userMapping);
    ElasticIndexer.addMapping("givenPermission", givenPermissionMapping);
    await new ElasticIndexer("givenPermission").updateMapping(
      givenPermissionMapping,
    );
  } catch (err) {
    hexaLogger.insertError(
      "UpdateElasticIndexMappingsError",
      { function: "updateElasticIndexMappings" },
      "elastic-index.js->updateElasticIndexMappings",
      err,
    );
  }
};

module.exports = updateElasticIndexMappings;
