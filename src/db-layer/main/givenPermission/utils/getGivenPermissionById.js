const { HttpServerError } = require("common");

let { GivenPermission } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getGivenPermissionById = async (givenPermissionId) => {
  try {
    const givenPermission = Array.isArray(givenPermissionId)
      ? await GivenPermission.findAll({
          where: {
            id: { [Op.in]: givenPermissionId },
          },
        })
      : await GivenPermission.findByPk(givenPermissionId);
    if (!givenPermission) {
      return null;
    }
    return Array.isArray(givenPermissionId)
      ? (givenPermission.map = (item) => item.getData())
      : givenPermission.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionById",
      err,
    );
  }
};

module.exports = getGivenPermissionById;
