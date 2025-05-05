const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const { User, GivenPermission } = require("models");
const { Op } = require("sequelize");

const getGivenPermissionAggById = async (givenPermissionId) => {
  try {
    const forWhereClause = false;
    const includes = [];
    const givenPermission = Array.isArray(givenPermissionId)
      ? await GivenPermission.findAll({
          where: {
            id: { [Op.in]: givenPermissionId },
          },
          include: includes,
        })
      : await GivenPermission.findByPk(givenPermissionId, {
          include: includes,
        });

    if (!givenPermission) {
      return null;
    }

    const givenPermissionData =
      Array.isArray(givenPermissionId) && givenPermissionId.length > 0
        ? givenPermission.map((item) => item.getData())
        : givenPermission.getData();
    await GivenPermission.getCqrsJoins(givenPermissionData);
    return givenPermissionData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionAggById",
      err,
    );
  }
};

module.exports = getGivenPermissionAggById;
