const { HttpServerError, BadRequestError } = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getGivenPermissionListByQuery = async (query) => {
  try {
    const givenPermission = await GivenPermission.findAll({ where: query });
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }
    if (!givenPermission) return [];
    return givenPermission.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionListByQuery",
      err,
    );
  }
};

module.exports = getGivenPermissionListByQuery;
