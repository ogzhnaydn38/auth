const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getIdListOfGivenPermissionByField = async (
  fieldName,
  fieldValue,
  isArray,
) => {
  try {
    let isValidField = false;

    const givenPermissionProperties = [
      "id",
      "permissionName",
      "roleId",
      "subjectUserId",
      "subjectUserGroupId",
      "objectId",
      "canDo",
    ];

    isValidField = givenPermissionProperties.includes(fieldName);

    if (!isValidField) {
      throw new BadRequestError(`Invalid field name: ${fieldName}.`);
    }

    const expectedType = typeof GivenPermission[fieldName];

    if (typeof fieldValue !== expectedType) {
      throw new BadRequestError(
        `Invalid field value type for ${fieldName}. Expected ${expectedType}.`,
      );
    }

    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let givenPermissionIdList = await GivenPermission.findAll(options);

    if (!givenPermissionIdList || givenPermissionIdList.length === 0) {
      throw new NotFoundError(
        `GivenPermission with the specified criteria not found`,
      );
    }

    givenPermissionIdList = givenPermissionIdList.map((item) => item.id);
    return givenPermissionIdList;
  } catch (err) {
    hexaLogger.insertError(
      "DatabaseError",
      { function: "getIdListOfGivenPermissionByField", fieldValue: fieldValue },
      "getIdListOfGivenPermissionByField.js->getIdListOfGivenPermissionByField",
      err,
      null,
    );
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfGivenPermissionByField;
